const inquirer = require('inquirer');
const express = require('express');
const mysql = require('mysql2');

//TODO connect to mysql database


async function displayDepartments() {
    // TODO implement a function to select all departmentsfor mySql
}

async function handleOptions() {
    const options = [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add a Employee",
        "Update an Employee's Role"
    ]

    const results = await inquirer.prompt([{
        message: "What would you like to do?",
        name: "command",
        type: "list",
        choices: options,
    }]);
    if (results.command == "View All Departments") {
        displayDepartments();
        handleOptions();
    } else if (results.command == "View All Roles") {
        //TODO refer to roles table
    }
    // TODO implement the rest of these
}

handleOptions();