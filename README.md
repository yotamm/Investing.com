# Investing.com
Home assignment

I haven't given attention to users and privileges. You can see the UN+PW in "app.js".

The "mysqljs" package does not yet support the new MySQL authentication methods so when you set up the DB please run the following and change parameters to your needs.  
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YourRootPassword'
