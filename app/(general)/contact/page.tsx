import type {Metadata} from 'next';
export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
 keywords: ["Elemento1", "Elemento2", "Otro_Elemento"]
};

const ContactPage = () => {
  return (
    <>
        <span className="text-7xl">Contact Page</span>
    </>
  )
}

export default ContactPage
