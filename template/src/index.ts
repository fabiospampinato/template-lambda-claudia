
/* LAMBDA */

function lambda ( event, ctx ) {

  ctx.succeed ( 'Hello World!' );
  // ctx.fail ( 'Ops!' );

}

/* EXPORT */

export = Object.assign ( lambda, { default: lambda, handler: lambda } );
