# Nightlife Coordination App

<a href="https://brendobrien-nightlife.herokuapp.com">https://brendobrien-nightlife.herokuapp.com</a>

## Upgrading to heroku 18

https://devcenter.heroku.com/articles/heroku-cli#download-and-install

```
brew tap heroku/brew && brew install heroku
heroku --version
heroku login
```

https://help.heroku.com/SMQ1J712/cedar-14-end-of-life-faq

```
heroku plugins:install apps-table
heroku apps:table --filter="STACK=cedar-14"
```

https://devcenter.heroku.com/articles/upgrading-to-the-latest-stack#upgrading-an-app

```
heroku stack:set heroku-18 -a brendobrien-nightlife
heroku git:remote -a brendobrien-nightlife
git commit --allow-empty -m "Upgrading to heroku-18"
git push heroku master
```

## mLab MONGODB Heroku shutdown

https://docs.mlab.com/shutdown-of-heroku-add-on/

## mLab <> Atlas

https://docs.mlab.com/how-to-migrate-sandbox-heroku-addons-to-atlas/#b-connect-your-atlas-organization-to-the-source-mlab-account

## MongoDB Atlas - Getting Started

### 1. Build Cluster

```
AWS, N.Virginia (us-east-1)
M0 Sandbox (Shared RAM, 512 MB Storage)
MongoDB 4.2, No Backup
brendobrien-nightlife-cluster
```

### 2. Database user

- https://cloud.mongodb.com/v2/5fa6eff39eb40748fa4c9bba#security/database/users

```
username: brendan
password: <randomly-generated>
```

### 3. IP Address

- https://cloud.mongodb.com/v2/5fa6eff39eb40748fa4c9bba#security/network/accessList
- https://stackoverflow.com/questions/42159175/connecting-heroku-app-to-atlas-mongodb-cloud-service

```
0.0.0.0/0

please note that adding 0.0.0.0/0 to the cluster’s whitelist
can expose the cluster to denial of service attacks. Also, please be aware that Heroku uses dynamic IPs, so you will have to add 0.0.0.0/0 to the whitelist when using Heroku to connect to your Atlas Cluster.
```

### 4. Load Sample Data

maybe later

### 5. Connect cluster

```
mongodb+srv://brendan:<password>@brendobrien-nightlife-c.onj1f.mongodb.net/<dbname>?retryWrites=true&w=majority
<db_name> being test I guess? - nope its the cluster name
https://stackoverflow.com/questions/63224330/where-do-i-find-my-dbname-for-mongodb-connection-string
```
