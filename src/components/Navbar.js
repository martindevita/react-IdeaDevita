import "../app/style.css"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><span className="spanTxt">Navbar</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#"><span className="spanTxt">Home</span></a>
                        <a class="nav-link" href="#"><span className="spanTxt">Features</span></a>
                        <a class="nav-link" href="#"><span className="spanTxt">Pricing</span></a>
                        <a class="nav-link disabled"><span className="spanTxt">Disabled</span></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
