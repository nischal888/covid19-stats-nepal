var eventEmitter = require('../foundations/eventEmitter')
var observeDataChange = require('../listeners/observeDataChange')
var logger = require('../utils/logger').logger

module.exports = {
  eventName: 'newDataInserted',
  emitter: eventEmitter.get(), // singleton instance
  listeners: [observeDataChange],
  data: null,
  mode: 'on',
  emit: function (data) {
    this.data = data
    logger.info('Emitting New Data Inserted Event!')
    this.emitter.emit(this.eventName)
  }
}
