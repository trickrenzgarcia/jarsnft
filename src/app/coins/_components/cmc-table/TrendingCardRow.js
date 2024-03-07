import Image from 'next/image'

const styles = {
  trendingCardRow: `flex items-center space-x-4 m-2 p-2`,
}

const TrendingCardRow = ({ number, icon, name, sparklines, percentChange}) => {

  function formatNumber(percentageChange) {
    const number = parseFloat(percentChange);
    if (isNaN(number)) {
        console.error('Error: The provided value is not a valid number.');
        return null;
    }
    return parseFloat(number.toFixed(2));
  }

  return (
    <div className={styles.trendingCardRow}>   
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && <Image alt='icons.svg' src={icon} width={30} height={30} style={{ borderRadius: '15px' }}/>}
        </div>
        <p className='font-bold'>
          {name}
          <span className='text-gray-400 mx-1'>{number}</span>
        </p>
      </div>
      <div className='mx-5'>
        {sparklines && <Image alt='sparkline.svg' src={sparklines} width={160} height={100} quality={100} priority={true}/>}
      </div>
      <div className='mx-3'>
        <p className='font-bold text-white'>{formatNumber(percentChange)} </p>
        
      </div>
      
    </div>
  )
}

export default TrendingCardRow