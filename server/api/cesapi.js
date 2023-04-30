/**
 * 启动路径 http://localhost:3000/api/cesapi?id=666
 */

export default defineEventHandler(event => {
// const {req,res} = event.node
// console.log('[ req ] >', req)

const query = getQuery(event)

  return {
    status:1,
    msg:'success:' + query.id
  }
})