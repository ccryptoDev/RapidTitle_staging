import React from "react";

function PersonDropdown() {
    return (
        <div className="bg-[#FAFBFD] p-[15px]">
            <p className="text-[12px] font-sans" style={{ color: "#97A3B7" }}>YOUR SELLERS IN THIS GROUP</p>
            {
                PersonData.map((item, index) => (
                    <div key={index} className="flex items-center cursor-pointer my-4">
                        <img className="pe-4" src={require('../../../assets/img/Avatar/' + item.image + '.png')} alt="" />
                        <h3 className="px-2 flex-1 text-black" style={{ fontSize: '16px', fontWeight: 600 }}>{item.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

const PersonData = [
    {
        image: 'Avatar12',
        name: 'Lia Smith'
    },
    {
        image: 'Avatar15',
        name: 'Earl Garris'
    },
    {
        image: 'Avatar13',
        name: 'Clark Wayne'
    },
    {
        image: 'Avatar12',
        name: 'Salim Dusdebes'
    }
]

export default PersonDropdown;