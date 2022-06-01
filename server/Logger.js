const { createLogger, transports, format } = require('winston');

const customFormat = format.combine(format.timestamp(), format.printf((info) => {
  return `${info.timestamp} [${info.level.toUpperCase().padEnd(7)}]: ${info.message}`
}))


class Logger {

 
static log=null;

   getloger(){

    if(this.log==null){

      this.log= createLogger({
        format: customFormat,
          transports: [
            new transports.Console({level: 'silly'}),
            new transports.File({ filename: 'app.log', level: 'info'})
          ]});
       } 
    
       console.log(this.log)
return this.log
}


}

 module.exports= new Logger();