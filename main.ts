radio.onReceivedString(function (receivedString) {
    radio.sendValue("Humidity:", envirobit.getHumidity())
    radio.sendValue("Temperature:", envirobit.getTemperature())
    radio.sendValue("Noise:", envirobit.getNoiseLevel())
    envirobit.setLEDs(envirobit.OnOff.On)
    basic.pause(200)
    envirobit.setLEDs(envirobit.OnOff.Off)
})
