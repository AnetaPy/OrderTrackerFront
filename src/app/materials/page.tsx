import React from "react";
import './page.css';
import {Navigation} from "@/components/common/Navigation/Navigation";
import {Header} from "@/components/common/Header/Header";
import {
    OrderInfoMaterialsUsed
} from "@/components/common/OrderInfo/OrderInfoMaterialsUsed/OrderInfoMaterialsUsed";
import {AddMaterial} from "@/components/common/Add/AddMaterial/AddMaterial";

const Materials = () => {
    return (
        <div className="Materials">
            <Navigation/>
            <div className="Materials_container">
                <Header text="Stan magazynowy"/>
                <div className="Materials_wrapper">
                    <OrderInfoMaterialsUsed/>
                    <AddMaterial/>
                </div>
            </div>
        </div>
    )
}

export default Materials;
