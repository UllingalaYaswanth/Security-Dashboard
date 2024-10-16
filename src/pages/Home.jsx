import React from 'react';
import ProjectStastics from '../layouts/ProjectStastics';
import Platforms from '../layouts/Platforms';
import ProjectsCard from '../layouts/ProjectsCard';
import ClientCard from '../layouts/ClientCard';
import MembersCard from '../layouts/MembersCard'

const projects= [
  {
    name:"website Redesigner",
    type:"Web Development",
    date:'14-11-2023',
    member:["sruthi","sai","Yash"],
    files:4,
    progress:20
  },
  {
    name:"website Redesigner",
    type:"Web Development",
    date:'14-11-2023',
    member:["sruthi","sai","Yash"],
    files:4,
    progress:20
  },
  {
    name:"website Redesigner",
    type:"Web Development",
    date:'14-11-2023',
    member:["sruthi","sai","Yash"],
    files:4,
    progress:20
  },
  {
    name:"website Redesigner",
    type:"Web Development",
    date:'14-11-2023',
    member:["sruthi","sai","Yash"],
    files:4,
    progress:20
  }
]

const clints = [
  {
    company:'Intelliod',
    role:"CEO",
    time:"12-05-2022"
  },
  {
    company:'Intelliod',
    role:"CEO",
    time:"12-05-2022"
  },
  {
    company:'Intelliod',
    role:"CEO",
    time:"12-05-2022"
  },
  {
    company:'Intelliod',
    role:"CEO",
    time:"12-05-2022"
  },
  
]

const members = [
  {
    count:4,
    role:"UI Designer"
  },
  {
    count:4,
    role:"UI Designer"
  },
  {
    count:4,
    role:"UI Designer"
  },
  {
    count:4,
    role:"UI Designer"
  },
]

function Home() {
  return (
    <div className='p-5'>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <ProjectStastics />
        <Platforms />
        <ProjectStastics />
        <Platforms />
      </div>
      <div className='mt-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-semibold'>Current Projects</h1>
          <p className='text-sm underline text-indigo-600 cursor-pointer'>See all</p>
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-4 mt-5 gap-4'>
          {
            projects.map((e) => <ProjectsCard project={e}/>)
          }
        </div>
      </div>
      <div className='mt-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Current Clints</h1>
        <p className='text-indigo-600 underline cursor-pointer'>See all</p>
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-5'>
        {
          clints.map((e) => <ClientCard clint={e} />)
        }
      </div>     
      </div>
      <div className='mt-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-semibold'>Members</h1>
          <p className='text-indigo-600 underline cursor-pointer'>See all</p>
        </div>
        <div className='mt-5 grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
          {
            members.map((e)=> <MembersCard members={e}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
