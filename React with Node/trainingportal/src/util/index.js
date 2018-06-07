
export const isNullOrEmpty = (value) => {
    if(null == value || value.trim() == ''){
        return true;
    }
    return false;
}

