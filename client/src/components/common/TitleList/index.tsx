import React, { BaseSyntheticEvent, useState } from 'react';
import './index.view.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { KeyIcon } from 'components/Key';
import multiIcon from 'assets/img/multi_select.svg';
import flagIcon from 'assets/img/red_flag.svg';
import CO from 'assets/img/capital_one.png';
import LA from 'assets/img/LA.png';


function TitleList({viewMode,data, changeView}: any) {
  const navigate = useNavigate();


  return (
    <div className="p-2 max-h-[680px] overflow-y-scroll" style={{flex:3}}>
      <div className='title-header flex'>
          <div className='flex-1 flex'>
            <span style={{fontSize:30}}>TitleVault</span>
            <KeyIcon />
          </div>
          <div>
            {
              viewMode === 'card' ?  
              (<button className="bg-[#FF3366] text-white font-bold py-2 px-4 rounded inline-flex items-center" style={{borderRadius:4}} onClick={() => changeView()}>
                  <span className='mr-2'>List View</span>
                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 11.005H15M5 6.005H15M5 1.005H15M1.00195 11.005V11.007L1 11.007V11.005H1.00195ZM1.00195 6.005V6.007L1 6.00696V6.005H1.00195ZM1.00195 1.005V1.007L1 1.00696V1.005H1.00195Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) :
              (<button className="bg-[#FF3366] text-white font-bold py-2 px-4 rounded inline-flex items-center" style={{borderRadius:4}} onClick={() => changeView()}>
                  <span className='mr-2'>Card View</span>
                  <img src={multiIcon} className='cursor-pointer'/>
                </button>)
            }
            <button className="bg-[#FF3366] text-white font-bold py-2 px-4 ml-2 rounded inline-flex items-center" style={{borderRadius:4}}>
              <span className='mr-2'>Pending</span>
            </button>  
            <button className=" text-black font-bold py-2 px-4 ml-2 rounded inline-flex items-center" >
              <span className='mr-2'>Actions</span>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform:'rotate(180deg)'}}>
                <path d="M1.16732 7.5L7.00065 1.66667L12.834 7.5" stroke="#4A5567" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>  
          </div>
      </div>
      <div className='title-body grid grid-cols-4 p-2'>
        {
          data.map((title:any,index:any) => {
            return <div className='card min-h-[297px] col-span-1 m-2' key={index}>
            <div className='w-full relative'>
              <img src={title.image} width={"100%"}/>
              <img src={multiIcon} className='absolute top-4 left-5 cursor-pointer'/>
              <img src={flagIcon} className='absolute bottom-3 left-3 cursor-pointer'/>
              <div className='absolute top-4 right-3'>
                <img src={CO} className='cursor-pointer w-[55px] h-[22px]'/>
                <img src={LA} className='cursor-pointer w-[55px] h-[22px] mt-2'/>
              </div>
              <img src={title.observer} width={44} height={43} className='absolute right-2 bottom-[-20px]'/>
            </div>
            <p className='text-gray-600 text-base mt-1'>{title.sn}</p>
            <p className='text-[#4848A4] text-xl'>{title.title}</p>
            <div className='flex p-2 items-center'>
              <div className='flex-1'>
                <p className='text-[#FF4876] text-xl mt-1'> {title.price}</p>
                <p className='text-black text-base mt-1'> {title.duration} Days</p>
                <p className='text-black text-base mt-1'> {title.number}</p>
              </div>
              <div>
                <div>
                  <button className="bg-[#FF3366] w-full text-white font-bold py-1 px-2 rounded inline-flex items-center" style={{borderRadius:4}}>
                    <span className='mr-2 text-xl'> {title.holds} Holds</span>
                  </button>
                </div>
                <div className='mt-2'>
                  <button className="bg-[#FF5C85] justify-center w-full text-white font-bold py-2 px-3 rounded inline-flex items-center" style={{borderRadius:4}}>
                    <span className='mr-2 text-xl'> {title.status}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          })
        }
      </div>
    </div>
  );
}

export default TitleList;
