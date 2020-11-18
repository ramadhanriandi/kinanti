function getColor(type) {
    if (type === 'primary') {
        return 'rgb(32, 83, 175)';
    }
    else if (type === 'danger') {
        return '#E84136';
    }
    else {
        return 'rgb(246, 247, 248)';
    }
}

export default getColor