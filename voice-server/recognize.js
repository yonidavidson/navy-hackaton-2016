'use strict';

const Speech = require('@google-cloud/speech');
const execSync = require('child_process').execSync;
const fetch = require('node-fetch')

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
      fetch('http://navyhack2016.azurewebsites.net/getStatus')
      .then(function(res) {
        return res.json();
      }).then(function(json) {
        if (json !== ""){
          console.log(json);
          // let command = "./talk.sh " + json
          // execSync(command);
        }
        })
    })

  // Start recording and send the microphone input to the Speech API
  record.start({ sampleRate: 16000 })
  setTimeout(function () {
  record.stop().pipe(recognizeStream);
  }, 3000);
}
streamingMicRecognize()