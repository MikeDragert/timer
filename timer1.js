const beepTimes = process.argv.slice(2);
if (beepTimes.length > 0) {
  for (const time of beepTimes) {
    const fixedTime = Number(time);
    if (!isNaN((fixedTime)) && (fixedTime > 0)) {
      setTimeout(() => {
        process.stdout.write('\x07');
        //the a bove beep command didn't make any sound, so write to terminal too
        console.log("BEEP!");
      }, fixedTime * 1000);
    }
  }
}