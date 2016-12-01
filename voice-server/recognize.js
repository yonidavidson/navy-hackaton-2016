'use strict';

const Speech = require('@google-cloud/speech');

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
    .on('data', (data) => process.stdout.write(data.results));

  // Start recording and send the microphone input to the Speech API
  record.start({ sampleRate: 16000 }).pipe(recognizeStream);

  console.log('Listening, press Ctrl+C to stop.');
}

streamingMicRecognize()