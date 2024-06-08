import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removepeople } from "../store/actions/personActions";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import Loding from "./partials/Loding";
import HorizontalCards from "./partials/HorizontalCards";

function Persondetails() {
    const {pathname} = useLocation();
    const navigate = useNavigate(); 
    const {id} = useParams();
    const {info} = useSelector((state) => state.person);
    const dispatch= useDispatch();
    console.log(info);
    useEffect(() => {
        dispatch(asyncloadperson(id));
        return () => {
            dispatch(removepeople());
        }
    },[id]);


    return info ? (
        <div>PersonDetails</div>
    ) : <Loding />;
}

export default Persondetails;