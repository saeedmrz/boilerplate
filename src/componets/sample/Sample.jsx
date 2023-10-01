import classes from './sample.module.scss'

const Sample = () => {
  return (
    <>
      <div className={classes['container']}>Sample</div>
      <div className={`${classes['container']} | text-center`}>Sample 2</div>
    </>
  )
}

export default Sample
