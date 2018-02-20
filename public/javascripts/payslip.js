var timetrack = new Firebase('https://payslip-timetrack.firebaseio.com/');
var payslip = timetrack.child('timetrack');
debugger
payslip.push({
  path: window.location.pathname,
  arrivedAt: Firebase.ServerValue.TIMESTAMP,
  userAgent: navigator.userAgent
});
