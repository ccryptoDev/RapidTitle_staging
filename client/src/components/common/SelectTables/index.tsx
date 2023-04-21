import React from "react";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputTextField from "./InputTextField";
import TableList from './SelectTablesArray';
import SelectListArray from "./SelectListArray";
import SelectTablesArray from "./SelectTablesArray";

function SelectTables() {
    return (
        <div className="col-span-3 p-2 w-full">

            <div className="store-card px-8 py-4">
                <div className="flex items-end  text-[#4848A4]">
                    <p className="text-3xl px-3" style={{ fontWeight: 600, fontSize: '36px' }}>Certificate of a Title</p>
                    <DescriptionOutlinedIcon style={{ fontSize: '40px' }} />
                </div>
                <div className="">
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { sm: '1fr 1fr 1fr 1fr 1fr' },
                            gap: 2,
                        }}
                    >
                        {/* {
                            TableList.map((item, index) => (
                                <InputTextField
                                    key={index}
                                    label={item.label}
                                    defaultValue={item.defaultValue}
                                    id="reddit-input"
                                    variant="filled"
                                    style={{ marginTop: 11 }}
                                />
                            ))
                        } */}
                        <SelectTablesArray />
                    </Box>
                </div>
                <hr className="mt-5" />
                <div className="flex">
                    {
                        SelectListArray.map((item, index) => (
                            <div key={index} className="bg-white mt-5 mx-3 hover:bg-grey text-grey-darkest py-3 px-4 rounded inline-flex items-center text-[#4848A4]" style={{ borderRadius: 12, border: '1px solid grey' }}>
                                <img src={require('../../../assets/img/' + item.image + '.png')} alt={item.title} />
                                <div className="px-3">
                                    <p className="font-bold">{item.title}</p>
                                    <p className="text-[#9B96B6]">{item.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex mt-24 mb-3">
                    <p style={{ fontSize: '14px' }}>
                        Remember, once you have selected a Seller, Lender and DMV,
                        an invitation will be sent to the aforementioned, where they can accept,
                        decline or suggest a change of title.
                    </p>
                    <div className="flex items-center">
                        <button className="bg-[#FF3366] text-white px-4 py-3 font-bold rounded  items-center" style={{ borderRadius: 4 }}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectTables;