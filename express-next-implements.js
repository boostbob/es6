const app = {
  middleware: [],
  callback(ctx) {
    console.log(ctx);
  },
  use(fn) {
    this.middleware.push(fn);
  },
  go(ctx) {
    console.error(this.middleware, this.middleware.length);
    // console.error(this.callback.toString());
    var func = this.middleware.reduceRight((next, fn, index) => {
      console.error(index, '=>', next.toString());
      return () => fn(ctx, next);
    // }, this.callback.bind(this, ctx));
    // initial(the first next)
    }, () => {console.error('start')});
    
    func();
  }
};

app.use(function(ctx, next) {
  console.error('1');
  ctx.name = 'lucy';
  next();
});

app.use(function(ctx, next) {
  console.error('2');
  ctx.age = 12;
  next();
});

app.use(function(ctx, next) {
  console.log(`${ctx.name} is ${ctx.age} years old`);
  next();
});

app.go({});