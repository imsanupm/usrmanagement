const isLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
};

const isLogout = (req, res, next) => {
    if (req.session.user_id) {
        return res.redirect('/home');
    }
    next();
};




const nocache = (req, res, next) => {
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');
    next();
  };

  const aobutmid = (req,res,next)=>{
    
  }



module.exports = {
    isLogin,
    isLogout,
    nocache
};