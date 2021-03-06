import React from 'react';
import {Grid} from '@material-ui/core';

import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
        <Grid
            container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        >
                {goods.map((item) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
        </Grid>
    );
};

export default GoodsList;