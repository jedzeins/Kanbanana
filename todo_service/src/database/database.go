package database

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/lib/pq"
)

var (
	host         = "localhost" // if using docker compose, should be name of service, else "localhost"
	Port         = 5434
	user         = "postgres"
	password     = "password"
	databaseName = "postgres"
	DB           *sql.DB
)

func Initialize() error {
	time.Sleep(3 * time.Second)
	dns := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, Port, user, password, databaseName)

	var err error
	DB, err = sql.Open("postgres", dns)
	if err != nil {
		panic(err)
	}

	err = DB.Ping()
	if err != nil {
		panic(err)
	}

	return err

}
