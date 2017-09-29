# vue-speech

Interact with the new Web Speech Recognition Api.

> Currently available only in Chrome and Firefox


![alt tag](https://raw.githubusercontent.com/MatteoGabriele/vue-speech/master/example.gif)

### The plugin will obviously have more features, if you have any requests or ideas, drop me an issue :)

## Install

```bash
npm install vue-speech
```

```js
import Vue from 'vue'
import VueSpeech from 'vue-speech'


Vue.use(VueSpeech)
```


## Usage

```html
<template>
  <div>
    <vue-speech />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
```

### Change language

```html
<vue-speech lang="it-IT" />
```

### Return speech data
```html
<template>
  <div>
    <vue-speech @onTranscriptionEnd="onEnd"/>
  </div>
</template>

<script>
export default {
  methods: {
    onEnd ({ lastSentence, transcription }) {
      // `lastSentence` is the last sentence before the pause
      // `transcription` is the full array of sentences
    }
  }
}
</script>
```

# Issues and features requests

Please drop an issue, if you find something that doesn't work, or a feature request at [https://github.com/MatteoGabriele/vue-speech/issues](https://github.com/MatteoGabriele/vue-speech/issues)

Follow me on twitter [@matteo\_gabriele](https://twitter.com/matteo_gabriele)
