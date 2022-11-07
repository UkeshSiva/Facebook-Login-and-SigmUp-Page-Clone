import './SignUpPage.css'
export default function SignupPage() {
    function handleonChange(props) {
        props.preventDefault()
        window.location.href = "/LoginPage"
    }
    return (
        <>
            <div className="main">
                <h1>facebook</h1>
                <form>
                    <h2 className="first_title">Create a new account</h2>
                    <p className="first_sub_title" id="sub_title_0">It's quick and easy.</p>
                    <hr />
                    <div className="input">
                        <input type="text" placeholder="First Name" className="first_name" id="all" required />
                        <input type="text" placeholder="Sur Name" className="sur_name" id="all" required />
                        <br />
                        <input type="email/number   " placeholder="Mobile number or email address" id="all1" required />
                        <br />
                        <input type="password" placeholder="New Password" id="all2" required />
                        <br />
                        <p className="sub_title_3" id="sub_title">Date Of Birth?</p>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                            <option>21</option>
                            <option>22</option>
                            <option>23</option>
                            <option>24</option>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                            <option>28</option>
                            <option>29</option>
                            <option>30</option>
                            <option>31</option>
                        </select>
                        <select>
                            <option>Jan</option>
                            <option>Feb</option>
                            <option>Mar</option>
                            <option>Apr</option>
                            <option>May</option>
                            <option>Jun</option>
                            <option>Jul</option>
                            <option>Aug</option>
                            <option>Sep</option>
                            <option>Oct</option>
                            <option>Nov</option>
                            <option>Dec</option>
                        </select>
                        <select>
                            <option>1990</option>
                            <option>1991</option>
                            <option>1992</option>
                            <option>1994</option>
                            <option>1995</option>
                            <option>1996</option>
                            <option>1997</option>
                            <option>1998</option>
                            <option>1999</option>
                            <option>2000</option>
                            <option>2001</option>
                            <option>2002</option>
                            <option>2003</option>
                            <option>2004</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                            <option>2015</option>
                            <option>2016</option>
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                        </select>
                        <p className="sub_title_3" id="sub_title_5">Gender?</p>
                        <div className="female" id="all_gender">
                            <label for="female"> Female </label>
                            <input type="radio" name="gender" value="female" />
                        </div>
                        <div className="male" id="all_gender">
                            <label for="male"> Male </label>
                            <input type="radio" name="gender" value="male" />
                        </div>
                        <div className="other" id="all_gender">
                            <label for="Other"> Other </label>
                            <input type="radio" name="gender" value="other" />
                        </div>
                        <div>

                            <p className="sub_title_4">
                                People who use our service may have uploaded your contact information to Facebook.
                                <a href=" Learn more."> Learn more.</a><br /><br />
                                By clicking Sign Up, you agree to our <a href="terms, Privacy Policy">terms, Privacy Policy</a> and <a href="Cookies Policy.">Cookies Policy. </a> You may
                                receive SMS notifications from us and can opt out at any time
                            </p>
                        </div>
                        <input type="submit" value="Sign Up" className="submit" />
                        <br /><br />
                        <a href="Already Have An Account ? " onClick={(e) => handleonChange(e)}>Already have an account? </a>
                    </div>
                </form>
            </div>
        </>
    )
}