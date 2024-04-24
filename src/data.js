import gardner from './imgs/gardener.jpeg'
import babysitter from  './imgs/babysitter.jpg'
import allrounder from  './imgs/allRounder.jpeg'
import { FaShield, FaTrophy } from 'react-icons/fa6';
import { TbReplaceFilled } from "react-icons/tb";




export const navaritems=[
    {
        id:1,
        item:'services',
        url:'#services'
    },
    {
        id:2,
        item:'about',
        url:'#about'

    },
    {
        id:3,
        item:<div className='btn'>signin</div>,
        url:'/signin'

    }
];

export const serviceCardData=[
    {
        id:1,
        title:'Gardener',
        img:gardner
    },    {
        id:2,
        title:'All Rounder',
        img:allrounder
    },    {
        id:3,
        title:'Babysitter',
        img:babysitter
    },{
    id:4,
    title:'All Rounder',
    img:allrounder
    },    {
        id:5,
        title:'Gardener',
        img:gardner
    }
,{
    id:6,
    title:'Babysitter',
    img:babysitter
}
];
export const aboutCardData=[
    {
        id:1,
        title:'Safety',
        text:'We check proper details of every maid because your safety is our first priority',
        icon:<FaShield />
    },    {
        id:2,
        title:'High Quality',
        text:'Only skilled maids are registered with us. As maids are personally trained by our team',
        icon:<FaTrophy />
    },    {
        id:3,
        title:'Replacement for Free',
        text:'If the maid leaves for any reason within 6 months of joining, we will replace the maid',
        icon:<TbReplaceFilled />
    }
];
