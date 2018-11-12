
/* LAMBDA */

function lambda ( event, ctx ) {

  ctx.succeed ( 'Hello World!' );
  // ctx.fail ( 'Ops!' );

}

/* EXPORT */

const exp = Object.assign ( lambda, { handler: lambda } );

export default exp;
