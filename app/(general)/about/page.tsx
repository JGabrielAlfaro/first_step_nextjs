import type {Metadata} from 'next';

export const metadata: Metadata = {
 title: 'Abaout ',
 description: 'Abaout Description ',
 keywords:["About Page", "Fernando", "Información", "..."]
};

export default function AboutPage() {
    return (

    <span className="text-7xl">About Page</span>

    )
}