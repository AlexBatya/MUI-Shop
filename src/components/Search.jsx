import { TextField } from "@material-ui/core";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField 
    variant="standard"
    style={{
        marginBottom: "20px"
    }}
    fullWidth
    type='search' 
    value={value} 
    onChange={onChange}
    label='Введи текст, гей' />;
};

export default Search;