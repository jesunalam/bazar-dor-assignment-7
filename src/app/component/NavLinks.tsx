import Link from 'next/link';
import React from 'react';

// ১. সিঙ্গেল ক্যাটাগরির জন্য ইন্টারফেস
interface INavLinks {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}

const NavLinks = async () => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories');
    
    
    const navData: INavLinks[] = await res.json();
   
    console.log(navData);

    return (
        <>
            <div className='max-w-7xl mx-auto flex gap-2.5 overflow-x-auto p-4'> 
                {
                   
                    navData.map((n: INavLinks) => (
                        <Link 
                            href={`/category/${n.slug}`} 
                            key={n.id}
                            className="flex items-center  px-4 py-2 hover:bg-emerald-50 hover:text-emerald-700 rounded-full text-sm font-medium   transition"
                        >
                            <span>{n.icon}</span>
                            <span>{n.nameBn}</span>
                        </Link>
                    ))
                }
            </div>
        </>
    );
};

export default NavLinks;