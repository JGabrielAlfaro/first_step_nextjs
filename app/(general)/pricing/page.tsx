import type {Metadata} from 'next';
export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ["Elements1", "Elements2", "Elements3"]
};

const PrincingPage = () => {
  return (
    <span className='text-7xl'>
      Princing
    </span>
  )
}

export default PrincingPage
