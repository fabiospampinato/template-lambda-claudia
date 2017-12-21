
/* LAMBDA */

function lambda ( event, ctx ) {

  ctx.succeed ( 'Hello World!' );
  // ctx.fail ( 'Ops!' );

}

/* EXPORT */

export default lambda;
export {lambda as handler};
