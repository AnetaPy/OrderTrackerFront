import React from "react";
import './HomeAddMaterial.css';
import {Btn} from "@/components/common/Btn";

export const HomeAddMaterial = () => {
    return (
        <div className="Home_add_material">
            <div className="Home_add_material_container">
                <h2>Dodaj nowy materiał</h2>
                {/*<a href="/materials">zobacz stan mazynowy <img src="/icons/arrow_right.png" alt=""/></a>*/}
                <form>
                    <label>
                        Nazwa
                        <input
                            type="text"
                            name="name-material"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="Home_name_material"
                            placeholder="Nazwa materiału"
                        />
                    </label>
                    <label>
                        Ilość
                        <input
                            type="number"
                            name="amount-material"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="Home_amount_material"
                            placeholder="0"
                        />
                    </label>
                    <label>
                        Komentarz
                        <textarea
                            name="comment"
                            cols="30"
                            rows="4"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            className="Home_comment"
                            placeholder="Twój komentarz">
                                    </textarea>
                    </label>
                    <Btn text="Zapisz"/>
                </form>
            </div>
        </div>
    )
}