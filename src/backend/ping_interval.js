export const pingInterval=(port, time)=>setInterval(()=>{
  port.postMessage({type: 'ping'});
}, time);

export const cancelPingInterval=(interval)=>clearInterval(interval);
