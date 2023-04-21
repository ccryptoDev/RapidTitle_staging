import React from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

function SelectList() {
    return (
        <div className="col-span-2 p-2 w-full">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a Seller</h1>
                        <InfoOutlinedIcon />
                    </div>
                    <div className="flex justify-between items-center mt-[15px]">
                        <div className="flex items-center">
                            <img src={require('../../../assets/img/Avatar1.png')} alt="" />
                            <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>Bob Smith</h3>
                            <KeyboardArrowDownIcon />
                        </div>
                        <button className="bg-[#333399] text-white font-bold py-2 px-4 ml-2 rounded inline-flex items-center" style={{ borderRadius: 4 }}>
                            <span className='mr-2'>Invite a Seller</span>
                            <PersonAddAltOutlinedIcon />
                        </button>
                    </div>
                </div>
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a DMV</h1>
                        <InfoOutlinedIcon />
                    </div>
                    <div className="flex items-center mt-[15px]">
                        <img src={require('../../../assets/img/Avatar2.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>Los Angeles DMV</h3>
                        <KeyboardArrowDownIcon className="me-3" />
                        <img className="ps-3" src={require('../../../assets/img/Filter.png')} alt="" />
                    </div>
                </div>
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a Lender</h1>
                        <InfoOutlinedIcon />
                    </div>
                    <div className="flex items-center mt-[15px]">
                        <img src={require('../../../assets/img/Avatar3.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>CAPITAL ONE AUTO FINANCE</h3>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
                <div className="store-card px-8 py-4">
                    <div className="flex items-end py-3 text-[#FF3366]">
                        <h1 className="text-2xl flex-1">Select a Salesperson</h1>
                        <InfoOutlinedIcon />
                    </div>
                    <div className="flex items-center mt-[15px]">
                        <img src={require('../../../assets/img/Avatar4.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>James Maverick</h3>
                        <KeyboardArrowDownIcon className="me-3" />
                        <img className="ps-3" src={require('../../../assets/img/Filter.png')} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SelectList;