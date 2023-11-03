"use client"

import React, {useEffect, useState} from "react";
import './page.css';
import {Navigation} from "@/components/common/Navigation/Navigation";
import {Header} from "@/components/common/Header/Header";
import {AddMaterial} from "@/components/common/Add/AddMaterial/AddMaterial";
import {Spinner} from "@/components/common/Spinner/Spinner";
import {OrderInfoItemsUsed} from "@/components/common/OrderInfo/OrderInfoItemsUsed";
import {ItemEntity} from "types";

const Materials = () => {
    const [allMaterials, setAllMaterials] = useState<ItemEntity[] | null>(null);

    const refreshItems = async () => {
        setAllMaterials(null);
        const res = await fetch('http://localhost:3001/materials');
        const data = await res.json();
        setAllMaterials(data);
    }

    useEffect(() => {
        refreshItems();
    }, [])

    return (
        <div className="Materials">
            <Navigation/>
            <div className="Materials_container">
                <Header text="Stan magazynowy"/>
                <div className="Materials_wrapper">
                    {allMaterials === null
                        ? <Spinner/>
                        : <OrderInfoItemsUsed onMaterialsChange={refreshItems} items={allMaterials} btn={true}/>
                    }
                    <AddMaterial onMaterialsChange={refreshItems}/>
                </div>
            </div>
        </div>
    )
}

export default Materials;
