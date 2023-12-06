import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

export default function Footer() {
  return (
    <>
      <footer class="page-footer font-small cyan darken-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 py-5">
              <div class="mb-5 flex-center">
                <a href="www.facebook.com">
                  <img src="/images/facebook.png" alt="facebook" />
                </a>

                <a href="www.twitter.com">
                  <img src="/images/twitter.png" alt="twitter" />
                </a>

                <a href="www.google.com">
                  <img src="/images/google.png" alt="google" />
                </a>

                <a  href="www.linkedin.com">
                  <img src="/images/linkedin.png" alt="linkedin" />
                </a>
                <a href="www.instagram.com">
                  <img src="/images/instagram.png" alt="insta" />
                </a>
                <a href="www.pinterest.com">
                  <img src="/images/pinterest.png" alt="pinterest" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">
          © 2023 Copyright: Luvkush Sharma
        </div>
      </footer>
    </>
  );
}
