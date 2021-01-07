use netWorth_db;

INSERT INTO accounts (action_type, amount) 
VALUES
    ("checking", 4000.00), 
    ("savings", 125.00),
    ("retirement", 4000.00);

INSERT INTO expenses (expense_type, ex_amount)
VALUES
    ("Rent/Mortgage", 1000.00), 
    ("Utilities", 200.00),
    ("Food", 120.00),
    ("Transportation", 250.00),
    ("Entertainment", 100.00),
    ("Savings", 250.00),
    ("Miscellaneous", 250.00);