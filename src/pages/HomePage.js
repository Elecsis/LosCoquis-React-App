const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

function HomePage (){

    return (
        <main>
            <section id="header" class="jumbotron text-center">
                <h1 class="display-3">Los Coquis</h1>
                <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <a href={imgURL} class="btn btn-primary">Click</a>
                <a href={imgURL} class="btn btn-secondary">Click</a>
            </section>

            <section id="gallery">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Sunset</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Sunset</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">Sunset</h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium quae!</p>
                                        <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                                        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>    
           
                 
        </main>
    )
}

export default HomePage;