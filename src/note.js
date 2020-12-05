
// 属性定义
Object.defineProperty(Ninja.prototype, "constructor", {   enumerable: false,
  value: Ninja,
  writable: true
});

// 代理
const emperor = { name: "Komei" };
const proxy = new Proxy(emperor, {
  get: (target, key) => {
    report("Reading " + key + " through a proxy");
    return key in target ? target[key]
                         : "Don’t bother the emperor!"
    },
  set: (target, key, value) => {
    report("Writing " + key + " through a proxy");
    target[key] = value;
  }
});

proxy.nickname = 'nickname' //使用代理


// 代理测试性能
function isPrime(number){
  if(number < 2) { return false; }

  for(let i = 2; i < number; i++) {
	if(number % i == 0) { return false; }
  }

  return true;
}

isPrime = new Proxy(isPrime, {
  apply: (target, thisArg, args) => {
    console.time("isPrime");

    const result = target.apply(thisArg, args);

    console.timeEnd("isPrime");

    return result;
  }
});

isPrime(1299827);
