const Main = () => {
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
            })
    }, []);
    return (
        <div className="main">Main</div>
    )
}
export default Main