

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Effortless URL Shortening For <span>Everyone</span>
      </h1>
      <p>
        Effortlessly create short links for social media, marketing and more
      </p>
          <form>
              <input
                  type="text"
                  name="text"
                  placeholder="Enter long url"
              />
              <br></br>
              <button>Shorten Url</button>
      </form>
    </div>
  );
};

export default Hero;
