import React, {useState, useEffect} from "react";
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
    title: {
        color: 'red',
    },
});


export default function Page({id, options, count, color, data}) {
    return <MyWonderfulComponent id={id} options={options} count={count} color={color} data={data}>I'm text from a
        component</MyWonderfulComponent>
}

function MyWonderfulComponent({id, options, children, ...other}) {
    const {count} = other;
    const [sum, setSum] = useState(count);
    const classes = useStyles();

    useEffect(() => {
        if (id && options?.params?.fields?.isDynamic) {
            setSum((s)=>s + 1);
        }
    }, []);

    return (
        <>
            <h1 className={classes.title}>Hello World!</h1>
            <Grid>
                <Grid item xs={12}>
                    {children}
                </Grid>
                <Grid item xs={12}>
                    {sum}
                </Grid>
            </Grid>
        </>
    );
}
MyWonderfulComponent.propTypes={
    id: PropTypes.number,
    options:  PropTypes.object,
    count: PropTypes.number,
    color: PropTypes.string,
    data: PropTypes.object,
    msg:PropTypes.string
}
export async function getStaticProps() {
    const msg = "Hello from SSR"
    console.log(msg)
    return {
        props: {
            id: 1,
            options: {
                params: {
                    fields: {
                        isDynamic: true
                    }
                }
            },
            count: 2,
            color: 'red',
            data: {},
            msg
        },
    }
}
