use netWorth_db;

INSERT INTO checking (action_type, amount) 
VALUES
    ("deposit", 4000.00), 
    ("withdrawl", 125.00),
    ("deposit", 4000.00),
    ("deposit", 500.00),
    ("deposit", 4000.00);

INSERT INTO savings (action_type, amount)
VALUES
    ("deposit", 1000.00), 
    ("transfer", 500.00),
    ("deposit", 1000.00),
    ("transfer", 250.00),
    ("deposit", 1000.00);

    INSERT INTO retirement (action_type, amount)
    VALUES
    ("deposit", 1000.00),
    ("deposit", 1000.00),
    ("deposit", 1000.00);

    INSERT INTO expenses (expense_type, ex_amount)
    VALUES
    ("Travel", 1000.00), 
    ("Groceries", 200.00),
    ("Electric", 120.00),
    ("Gas", 250.00),
    ("Cable", 100.00);