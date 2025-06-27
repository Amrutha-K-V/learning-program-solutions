DECLARE
    v_due_date DATE;
    v_customer_name VARCHAR2(100);
BEGIN
    FOR rec IN (SELECT l.loan_id, l.due_date, c.customer_name
                FROM loans l
                JOIN customers c ON l.customer_id = c.customer_id
                WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30) 
    LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || rec.loan_id || 
                             ' for customer ' || rec.customer_name || 
                             ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
    END LOOP;
END;
