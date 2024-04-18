DO $$ 
DECLARE 
    table_name text;
BEGIN
    -- Specify the tables to be dropped
    FOR table_name IN ('users', 'event', 'eventschedulemapping', 'schedule', 'sessions') 
    LOOP
        -- Generate and execute the DROP TABLE statement with explicit schema
        EXECUTE 'DROP TABLE IF EXISTS public."' || table_name || '" CASCADE';
    END LOOP;
END $$;
