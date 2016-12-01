'use strict';

const Speech = require('@google-cloud/speech');
const execSync = require('child_process').execSync;
const fetch = require('node-fetch')

let firstTime = true

// [START speech_streaming_mic_recognize]
const record = require('node-record-lpcm16');

function streamingMicRecognize () {
  // Instantiates a client
  const speech = Speech();

  const options = {
    config: {
      // Configure these settings based on the audio you're transcribing
      encoding: 'LINEAR16',
      sampleRate: 16000
    }
  };

  // Create a recognize stream
  const recognizeStream = speech.createRecognizeStream(options)
    .on('error', console.error)
    .on('data', (data) =>{
      const message = data.results
      process.stdout.write(message)
      if (message !== ''){
        if (message.search('ready')>0){
          console.log("")
          console.log("update firemen")
          fetch('http://navyhack2016.azurewebsites.net/fireMen')
        }else
        {
          fetch('http://navyhack2016.azurewebsites.net/getStatus')
          .then(function(res) {
            return res.json();
          }).then(function(json) {
            if (json !== ""){
              console.log("");
              console.log(json);
              if (firstTime && json.madaz){
                let command = "./madaz.sh "
                console.log(command);
                execSync(command);  
              }else{
                let command = "./talk.sh " + json.message
                console.log(command);
                execSync(command);
              }
            }
            })//end of fetch
        }
      }
      
    })

  // Start recording and send the microphone input to the Speech API
  record.start({ sampleRate: 16000 })
  setTimeout(function () {
  record.stop().pipe(recognizeStream);
  }, 3000);
}
streamingMicRecognize()