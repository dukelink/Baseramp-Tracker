export const testModelData = {
    "apiModel": {
        "category": {
            "2": {
                "category_id": 2,
                "category_title": "Work",
                "category_rank": 23,
                "category_status_id": 2
            },
            "3": {
                "category_id": 3,
                "category_title": "Continuing Education",
                "category_rank": 3,
                "category_status_id": 2
            }
        },
        "sprint": {
            "10": {
                "sprint_id": 10,
                "sprint_title": "Backlog",
                "sprint_rank": 1,
                "sprint_status_id": 1,
                "sprint_start": "2019-11-01T00:00:00.000Z",
                "sprint_stop": "2019-11-01T00:00:00.000Z"
            },
            "16": {
                "sprint_id": 16,
                "sprint_title": "Sprint 01/06-01/12/2020",
                "sprint_rank": null,
                "sprint_status_id": 3,
                "sprint_start": "2020-01-07T00:00:00.000Z",
                "sprint_stop": "2020-01-13T00:00:00.000Z"
            }
        },
        "project": {
            "8": {
                "project_id": 8,
                "project_title": "Portfolio: \"Project\" React App",
                "project_rank": 2,
                "project_status_id": 2,
                "project_category_id": 2
            },
            "19": {
                "project_id": 19,
                "project_title": "Javascript Studies & Client Side Libraries",
                "project_rank": 1,
                "project_status_id": 1,
                "project_category_id": 3
            },
            "38": {
                "project_id": 38,
                "project_title": "Server Side Development Technologies",
                "project_rank": null,
                "project_status_id": 1,
                "project_category_id": 3
            }
        },
        "story": {
            "210": {
                "story_id": 210,
                "story_title": "Refactor and split out \"ViewModelAPI\"",
                "story_rank": null,
                "story_status_id": 3,
                "story_project_id": 8,
                "story_sprint_id": 16,
                "story_points": 2,
                "story_hours_planned": 4,
                "story_hours_spent": null
            },
            "215": {
                "story_id": 215,
                "story_title": "Fix 'any' TS types of IAppState, ViewModel* files",
                "story_rank": null,
                "story_status_id": 3,
                "story_project_id": 8,
                "story_sprint_id": 16,
                "story_points": 2,
                "story_hours_planned": 3,
                "story_hours_spent": null
            },
            "217": {
                "story_id": 217,
                "story_title": "Research ExpressJS alternatives & add-ons; Fastify",
                "story_rank": null,
                "story_status_id": 1,
                "story_project_id": 38,
                "story_sprint_id": 10,
                "story_points": 1,
                "story_hours_planned": 3,
                "story_hours_spent": null
            },
            "220": {
                "story_id": 220,
                "story_title": "Javascript iterators and generators",
                "story_rank": null,
                "story_status_id": 1,
                "story_project_id": 19,
                "story_sprint_id": 10,
                "story_points": 2,
                "story_hours_planned": 4,
                "story_hours_spent": null
            },
            "225": {
                "story_id": 225,
                "story_title": "Publish to GitHub using GPL based FOSS license",
                "story_rank": null,
                "story_status_id": 1,
                "story_project_id": 8,
                "story_sprint_id": 10,
                "story_points": 3,
                "story_hours_planned": 8,
                "story_hours_spent": null
            }
        },
        "AppTable": {
            "AppColumn": {
                "AppTable_id": "AppColumn",
                "AppTable_title": "AppColumn",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "AppColumn"
            },
            "AppTable": {
                "AppTable_id": "AppTable",
                "AppTable_title": "AppTable",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "AppTable"
            },
            "category": {
                "AppTable_id": "category",
                "AppTable_title": "category",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "category"
            },
            "project": {
                "AppTable_id": "project",
                "AppTable_title": "project",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "project"
            },
            "sprint": {
                "AppTable_id": "sprint",
                "AppTable_title": "sprint",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "sprint"
            },
            "status": {
                "AppTable_id": "status",
                "AppTable_title": "status",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "status"
            },
            "story": {
                "AppTable_id": "story",
                "AppTable_title": "story",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "story"
            },
            "task": {
                "AppTable_id": "task",
                "AppTable_title": "task",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "task"
            },
            "audit": {
                "AppTable_id": "audit",
                "AppTable_title": "audit",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "audit"
            },
            "user": {
                "AppTable_id": "user",
                "AppTable_title": "user",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "user"
            }
        },
        "AppColumn": {
            "AppTable_id": {
                "AppColumn_id": "AppTable_id",
                "AppColumn_title": "AppTable_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppTable_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_title": {
                "AppColumn_id": "AppTable_title",
                "AppColumn_title": "AppTable_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppTable_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_description": {
                "AppColumn_id": "AppTable_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppTable_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_rank": {
                "AppColumn_id": "AppTable_rank",
                "AppColumn_title": "AppTable_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppTable_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_table_name": {
                "AppColumn_id": "AppTable_table_name",
                "AppColumn_title": "AppTable_table_name",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppTable_table_name",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 128,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_id": {
                "AppColumn_id": "AppColumn_id",
                "AppColumn_title": "AppColumn_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_title": {
                "AppColumn_id": "AppColumn_title",
                "AppColumn_title": "AppColumn_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_description": {
                "AppColumn_id": "AppColumn_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_rank": {
                "AppColumn_id": "AppColumn_rank",
                "AppColumn_title": "AppColumn_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 10100,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_AppTable_id": {
                "AppColumn_id": "AppColumn_AppTable_id",
                "AppColumn_title": "AppColumn_AppTable_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_AppTable_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "AppTable_id"
            },
            "AppColumn_ui_hidden": {
                "AppColumn_id": "AppColumn_ui_hidden",
                "AppColumn_title": "AppColumn_ui_hidden",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_ui_hidden",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "bit",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": "('0')",
                "AppColumn_related_pk_id": null
            },
            "AppColumn_ui_minwidth": {
                "AppColumn_id": "AppColumn_ui_minwidth",
                "AppColumn_title": "Width (with units)",
                "AppColumn_description": null,
                "AppColumn_rank": 10007,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_ui_minwidth",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 16,
                "AppColumn_column_default": "('120px')",
                "AppColumn_related_pk_id": null
            },
            "AppColumn_read_only": {
                "AppColumn_id": "AppColumn_read_only",
                "AppColumn_title": "AppColumn_read_only",
                "AppColumn_description": null,
                "AppColumn_rank": 10008,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_read_only",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "bit",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": "('0')",
                "AppColumn_related_pk_id": null
            },
            "AppColumn_column_name": {
                "AppColumn_id": "AppColumn_column_name",
                "AppColumn_title": "AppColumn_column_name",
                "AppColumn_description": null,
                "AppColumn_rank": 10009,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_column_name",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 128,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_is_nullable": {
                "AppColumn_id": "AppColumn_is_nullable",
                "AppColumn_title": "AppColumn_is_nullable",
                "AppColumn_description": null,
                "AppColumn_rank": 10010,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_is_nullable",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 3,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_data_type": {
                "AppColumn_id": "AppColumn_data_type",
                "AppColumn_title": "AppColumn_data_type",
                "AppColumn_description": null,
                "AppColumn_rank": 10011,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_data_type",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 128,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_character_maximum_length": {
                "AppColumn_id": "AppColumn_character_maximum_length",
                "AppColumn_title": "Max. Chars Allowed",
                "AppColumn_description": null,
                "AppColumn_rank": 10012,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_character_maximum_length",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_column_default": {
                "AppColumn_id": "AppColumn_column_default",
                "AppColumn_title": "Default value",
                "AppColumn_description": null,
                "AppColumn_rank": 10013,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_column_default",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 4000,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_related_pk_id": {
                "AppColumn_id": "AppColumn_related_pk_id",
                "AppColumn_title": "Related Column",
                "AppColumn_description": null,
                "AppColumn_rank": 10014,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": false,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_related_pk_id",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "AppColumn_id"
            },
            "status_id": {
                "AppColumn_id": "status_id",
                "AppColumn_title": "status_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "status_title": {
                "AppColumn_id": "status_title",
                "AppColumn_title": "status_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "status_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "status_description": {
                "AppColumn_id": "status_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "status_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "status_rank": {
                "AppColumn_id": "status_rank",
                "AppColumn_title": "status_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "status_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_id": {
                "AppColumn_id": "category_id",
                "AppColumn_title": "ID",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "category_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_title": {
                "AppColumn_id": "category_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_description": {
                "AppColumn_id": "category_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_rank": {
                "AppColumn_id": "category_rank",
                "AppColumn_title": "category_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_status_id": {
                "AppColumn_id": "category_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "project_id": {
                "AppColumn_id": "project_id",
                "AppColumn_title": "project_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "project_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_title": {
                "AppColumn_id": "project_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_description": {
                "AppColumn_id": "project_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_rank": {
                "AppColumn_id": "project_rank",
                "AppColumn_title": "project_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_status_id": {
                "AppColumn_id": "project_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "project_category_id": {
                "AppColumn_id": "project_category_id",
                "AppColumn_title": "project_category_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_category_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "category_id"
            },
            "sprint_id": {
                "AppColumn_id": "sprint_id",
                "AppColumn_title": "sprint_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "sprint_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_title": {
                "AppColumn_id": "sprint_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_description": {
                "AppColumn_id": "sprint_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_rank": {
                "AppColumn_id": "sprint_rank",
                "AppColumn_title": "sprint_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 10100,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_status_id": {
                "AppColumn_id": "sprint_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "147px",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "sprint_start": {
                "AppColumn_id": "sprint_start",
                "AppColumn_title": "Start Date",
                "AppColumn_description": null,
                "AppColumn_rank": 42,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_start",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "date",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_stop": {
                "AppColumn_id": "sprint_stop",
                "AppColumn_title": "End Date",
                "AppColumn_description": null,
                "AppColumn_rank": 44,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_stop",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "date",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_id": {
                "AppColumn_id": "story_id",
                "AppColumn_title": "story_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "story_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_title": {
                "AppColumn_id": "story_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_description": {
                "AppColumn_id": "story_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_rank": {
                "AppColumn_id": "story_rank",
                "AppColumn_title": "Story Rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_status_id": {
                "AppColumn_id": "story_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "147px",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "story_project_id": {
                "AppColumn_id": "story_project_id",
                "AppColumn_title": "Project",
                "AppColumn_description": null,
                "AppColumn_rank": 60,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_project_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "project_id"
            },
            "story_sprint_id": {
                "AppColumn_id": "story_sprint_id",
                "AppColumn_title": "Sprint",
                "AppColumn_description": null,
                "AppColumn_rank": 10007,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_sprint_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "sprint_id"
            },
            "story_points": {
                "AppColumn_id": "story_points",
                "AppColumn_title": "Story Points",
                "AppColumn_description": null,
                "AppColumn_rank": 10008,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_points",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_hours_planned": {
                "AppColumn_id": "story_hours_planned",
                "AppColumn_title": "Hours Planned",
                "AppColumn_description": null,
                "AppColumn_rank": 10009,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_hours_planned",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_hours_spent": {
                "AppColumn_id": "story_hours_spent",
                "AppColumn_title": "Hours Spent",
                "AppColumn_description": null,
                "AppColumn_rank": 10010,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_hours_spent",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_id": {
                "AppColumn_id": "task_id",
                "AppColumn_title": "task_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "task_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_title": {
                "AppColumn_id": "task_title",
                "AppColumn_title": "task_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_description": {
                "AppColumn_id": "task_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_rank": {
                "AppColumn_id": "task_rank",
                "AppColumn_title": "task_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_status_id": {
                "AppColumn_id": "task_status_id",
                "AppColumn_title": "task_status_id",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "task_story_id": {
                "AppColumn_id": "task_story_id",
                "AppColumn_title": "task_story_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_story_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "story_id"
            },
            "user_id": {
                "AppColumn_id": "user_id",
                "AppColumn_title": "user_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "user_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_title": {
                "AppColumn_id": "user_title",
                "AppColumn_title": "user_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 80,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_login": {
                "AppColumn_id": "user_login",
                "AppColumn_title": "user_login",
                "AppColumn_description": null,
                "AppColumn_rank": 10003,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_login",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 80,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_password_hash": {
                "AppColumn_id": "user_password_hash",
                "AppColumn_title": "user_password_hash",
                "AppColumn_description": null,
                "AppColumn_rank": 10004,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_password_hash",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 100,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_active": {
                "AppColumn_id": "user_active",
                "AppColumn_title": "user_active",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_active",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "bit",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": "('0')",
                "AppColumn_related_pk_id": null
            },
            "user_email": {
                "AppColumn_id": "user_email",
                "AppColumn_title": "user_email",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_email",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 80,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_phone": {
                "AppColumn_id": "user_phone",
                "AppColumn_title": "user_phone",
                "AppColumn_description": null,
                "AppColumn_rank": 10007,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_phone",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 30,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_user_id": {
                "AppColumn_id": "audit_user_id",
                "AppColumn_title": "audit_user_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_user_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "user_id"
            },
            "audit_AppTable_id": {
                "AppColumn_id": "audit_AppTable_id",
                "AppColumn_title": "audit_AppTable_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10002,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "audit_AppTable_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "AppTable_id"
            },
            "audit_table_id": {
                "AppColumn_id": "audit_table_id",
                "AppColumn_title": "audit_table_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10003,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_table_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_update_type": {
                "AppColumn_id": "audit_update_type",
                "AppColumn_title": "audit_update_type",
                "AppColumn_description": null,
                "AppColumn_rank": 10004,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_update_type",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 6,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_update_time": {
                "AppColumn_id": "audit_update_time",
                "AppColumn_title": "audit_update_time",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_update_time",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "datetimeoffset",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_field_changes": {
                "AppColumn_id": "audit_field_changes",
                "AppColumn_title": "audit_field_changes",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_field_changes",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "text",
                "AppColumn_character_maximum_length": 2147483647,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            }
        },
        "status": {
            "1": {
                "status_id": 1,
                "status_title": "Not Started",
                "status_description": null,
                "status_rank": 1
            },
            "2": {
                "status_id": 2,
                "status_title": "Started",
                "status_description": null,
                "status_rank": 2
            },
            "3": {
                "status_id": 3,
                "status_title": "Completed",
                "status_description": null,
                "status_rank": 3
            },
            "11": {
                "status_id": 11,
                "status_title": "Canceled",
                "status_description": null,
                "status_rank": 4
            }
        },
        "user": {
            "1": {
                "user_id": 1,
                "user_title": "Duke",
                "user_login": "duke",
                "user_password_hash": "password",
                "user_active": true,
                "user_email": null,
                "user_phone": null
            }
        },
        "project~story": {
            "8~16": {
                "project~story_id": "8~16",
                "project~story_title": "Portfolio: \"Project\" React App",
                "project~story_rank": 2,
                "project~story_sprint_id": 16,
                "project~story_project_id": 8
            },
            "38~10": {
                "project~story_id": "38~10",
                "project~story_title": "Server Side Development Technologies",
                "project~story_rank": null,
                "project~story_sprint_id": 10,
                "project~story_project_id": 38
            },
            "19~10": {
                "project~story_id": "19~10",
                "project~story_title": "Javascript Studies & Client Side Libraries",
                "project~story_rank": 1,
                "project~story_sprint_id": 10,
                "project~story_project_id": 19
            },
            "8~10": {
                "project~story_id": "8~10",
                "project~story_title": "Portfolio: \"Project\" React App",
                "project~story_rank": 2,
                "project~story_sprint_id": 10,
                "project~story_project_id": 8
            }
        }
    },
    "derivedModel": {
        "category": {
            "2": {
                "closedItem": false,
                "inProgress": true
            },
            "3": {
                "closedItem": false,
                "inProgress": true
            }
        },
        "sprint": {
            "10": {
                "closedItem": false,
                "inProgress": false
            },
            "16": {
                "closedItem": true,
                "inProgress": false
            }
        },
        "project": {
            "8": {
                "closedItem": false,
                "inProgress": true
            },
            "19": {
                "closedItem": false,
                "inProgress": false
            },
            "38": {
                "closedItem": false,
                "inProgress": false
            }
        },
        "story": {
            "210": {
                "closedItem": true,
                "inProgress": false
            },
            "215": {
                "closedItem": true,
                "inProgress": false
            },
            "217": {
                "closedItem": false,
                "inProgress": false
            },
            "220": {
                "closedItem": false,
                "inProgress": false
            },
            "225": {
                "closedItem": false,
                "inProgress": false
            }
        },
        "AppTable": {
            "AppColumn": {},
            "AppTable": {},
            "category": {},
            "project": {},
            "sprint": {},
            "status": {},
            "story": {},
            "task": {},
            "audit": {},
            "user": {}
        },
        "AppColumn": {
            "AppTable_id": {},
            "AppTable_title": {},
            "AppTable_description": {},
            "AppTable_rank": {},
            "AppTable_table_name": {},
            "AppColumn_id": {},
            "AppColumn_title": {},
            "AppColumn_description": {},
            "AppColumn_rank": {},
            "AppColumn_AppTable_id": {},
            "AppColumn_ui_hidden": {},
            "AppColumn_ui_minwidth": {},
            "AppColumn_read_only": {},
            "AppColumn_column_name": {},
            "AppColumn_is_nullable": {},
            "AppColumn_data_type": {},
            "AppColumn_character_maximum_length": {},
            "AppColumn_column_default": {},
            "AppColumn_related_pk_id": {},
            "status_id": {},
            "status_title": {},
            "status_description": {},
            "status_rank": {},
            "category_id": {},
            "category_title": {},
            "category_description": {},
            "category_rank": {},
            "category_status_id": {},
            "project_id": {},
            "project_title": {},
            "project_description": {},
            "project_rank": {},
            "project_status_id": {},
            "project_category_id": {},
            "sprint_id": {},
            "sprint_title": {},
            "sprint_description": {},
            "sprint_rank": {},
            "sprint_status_id": {},
            "sprint_start": {},
            "sprint_stop": {},
            "story_id": {},
            "story_title": {},
            "story_description": {},
            "story_rank": {},
            "story_status_id": {},
            "story_project_id": {},
            "story_sprint_id": {},
            "story_points": {},
            "story_hours_planned": {},
            "story_hours_spent": {},
            "task_id": {},
            "task_title": {},
            "task_description": {},
            "task_rank": {},
            "task_status_id": {},
            "task_story_id": {},
            "user_id": {},
            "user_title": {},
            "user_login": {},
            "user_password_hash": {},
            "user_active": {},
            "user_email": {},
            "user_phone": {},
            "audit_user_id": {},
            "audit_AppTable_id": {},
            "audit_table_id": {},
            "audit_update_type": {},
            "audit_update_time": {},
            "audit_field_changes": {}
        },
        "status": {
            "1": {},
            "2": {},
            "3": {},
            "11": {}
        },
        "user": {
            "1": {}
        },
        "project~story": {
            "8~16": {
                "closedItem": true,
                "inProgress": true
            },
            "38~10": {
                "closedItem": false,
                "inProgress": true
            },
            "19~10": {
                "closedItem": false,
                "inProgress": true
            },
            "8~10": {
                "closedItem": false,
                "inProgress": true
            }
        }
    },
    "metaModel": {
        "AppTable": {
            "AppColumn": {
                "AppTable_id": "AppColumn",
                "AppTable_title": "AppColumn",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "AppColumn"
            },
            "AppTable": {
                "AppTable_id": "AppTable",
                "AppTable_title": "AppTable",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "AppTable"
            },
            "category": {
                "AppTable_id": "category",
                "AppTable_title": "category",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "category"
            },
            "project": {
                "AppTable_id": "project",
                "AppTable_title": "project",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "project"
            },
            "sprint": {
                "AppTable_id": "sprint",
                "AppTable_title": "sprint",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "sprint"
            },
            "status": {
                "AppTable_id": "status",
                "AppTable_title": "status",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "status"
            },
            "story": {
                "AppTable_id": "story",
                "AppTable_title": "story",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "story"
            },
            "task": {
                "AppTable_id": "task",
                "AppTable_title": "task",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "task"
            },
            "audit": {
                "AppTable_id": "audit",
                "AppTable_title": "audit",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "audit"
            },
            "user": {
                "AppTable_id": "user",
                "AppTable_title": "user",
                "AppTable_description": null,
                "AppTable_rank": null,
                "AppTable_table_name": "user"
            }
        },
        "AppColumn": {
            "AppTable_id": {
                "AppColumn_id": "AppTable_id",
                "AppColumn_title": "AppTable_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppTable_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_title": {
                "AppColumn_id": "AppTable_title",
                "AppColumn_title": "AppTable_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppTable_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_description": {
                "AppColumn_id": "AppTable_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppTable_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_rank": {
                "AppColumn_id": "AppTable_rank",
                "AppColumn_title": "AppTable_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppTable_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppTable_table_name": {
                "AppColumn_id": "AppTable_table_name",
                "AppColumn_title": "AppTable_table_name",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "AppTable",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppTable_table_name",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 128,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_id": {
                "AppColumn_id": "AppColumn_id",
                "AppColumn_title": "AppColumn_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_title": {
                "AppColumn_id": "AppColumn_title",
                "AppColumn_title": "AppColumn_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_description": {
                "AppColumn_id": "AppColumn_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_rank": {
                "AppColumn_id": "AppColumn_rank",
                "AppColumn_title": "AppColumn_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 10100,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_AppTable_id": {
                "AppColumn_id": "AppColumn_AppTable_id",
                "AppColumn_title": "AppColumn_AppTable_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_AppTable_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "AppTable_id"
            },
            "AppColumn_ui_hidden": {
                "AppColumn_id": "AppColumn_ui_hidden",
                "AppColumn_title": "AppColumn_ui_hidden",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_ui_hidden",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "bit",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": "('0')",
                "AppColumn_related_pk_id": null
            },
            "AppColumn_ui_minwidth": {
                "AppColumn_id": "AppColumn_ui_minwidth",
                "AppColumn_title": "Width (with units)",
                "AppColumn_description": null,
                "AppColumn_rank": 10007,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_ui_minwidth",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 16,
                "AppColumn_column_default": "('120px')",
                "AppColumn_related_pk_id": null
            },
            "AppColumn_read_only": {
                "AppColumn_id": "AppColumn_read_only",
                "AppColumn_title": "AppColumn_read_only",
                "AppColumn_description": null,
                "AppColumn_rank": 10008,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "AppColumn_read_only",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "bit",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": "('0')",
                "AppColumn_related_pk_id": null
            },
            "AppColumn_column_name": {
                "AppColumn_id": "AppColumn_column_name",
                "AppColumn_title": "AppColumn_column_name",
                "AppColumn_description": null,
                "AppColumn_rank": 10009,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_column_name",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 128,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_is_nullable": {
                "AppColumn_id": "AppColumn_is_nullable",
                "AppColumn_title": "AppColumn_is_nullable",
                "AppColumn_description": null,
                "AppColumn_rank": 10010,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_is_nullable",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 3,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_data_type": {
                "AppColumn_id": "AppColumn_data_type",
                "AppColumn_title": "AppColumn_data_type",
                "AppColumn_description": null,
                "AppColumn_rank": 10011,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_data_type",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 128,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_character_maximum_length": {
                "AppColumn_id": "AppColumn_character_maximum_length",
                "AppColumn_title": "Max. Chars Allowed",
                "AppColumn_description": null,
                "AppColumn_rank": 10012,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_character_maximum_length",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_column_default": {
                "AppColumn_id": "AppColumn_column_default",
                "AppColumn_title": "Default value",
                "AppColumn_description": null,
                "AppColumn_rank": 10013,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_column_default",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 4000,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "AppColumn_related_pk_id": {
                "AppColumn_id": "AppColumn_related_pk_id",
                "AppColumn_title": "Related Column",
                "AppColumn_description": null,
                "AppColumn_rank": 10014,
                "AppColumn_AppTable_id": "AppColumn",
                "AppColumn_ui_hidden": false,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "AppColumn_related_pk_id",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "AppColumn_id"
            },
            "status_id": {
                "AppColumn_id": "status_id",
                "AppColumn_title": "status_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "status_title": {
                "AppColumn_id": "status_title",
                "AppColumn_title": "status_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "status_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "status_description": {
                "AppColumn_id": "status_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "status_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "status_rank": {
                "AppColumn_id": "status_rank",
                "AppColumn_title": "status_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "status",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "status_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_id": {
                "AppColumn_id": "category_id",
                "AppColumn_title": "ID",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "category_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_title": {
                "AppColumn_id": "category_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_description": {
                "AppColumn_id": "category_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_rank": {
                "AppColumn_id": "category_rank",
                "AppColumn_title": "category_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "category_status_id": {
                "AppColumn_id": "category_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "category",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "category_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "project_id": {
                "AppColumn_id": "project_id",
                "AppColumn_title": "project_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "project_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_title": {
                "AppColumn_id": "project_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_description": {
                "AppColumn_id": "project_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_rank": {
                "AppColumn_id": "project_rank",
                "AppColumn_title": "project_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "project_status_id": {
                "AppColumn_id": "project_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "project_category_id": {
                "AppColumn_id": "project_category_id",
                "AppColumn_title": "project_category_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "project",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "project_category_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "category_id"
            },
            "sprint_id": {
                "AppColumn_id": "sprint_id",
                "AppColumn_title": "sprint_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "sprint_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_title": {
                "AppColumn_id": "sprint_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_description": {
                "AppColumn_id": "sprint_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_rank": {
                "AppColumn_id": "sprint_rank",
                "AppColumn_title": "sprint_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 10100,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_status_id": {
                "AppColumn_id": "sprint_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "147px",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "sprint_start": {
                "AppColumn_id": "sprint_start",
                "AppColumn_title": "Start Date",
                "AppColumn_description": null,
                "AppColumn_rank": 42,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_start",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "date",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "sprint_stop": {
                "AppColumn_id": "sprint_stop",
                "AppColumn_title": "End Date",
                "AppColumn_description": null,
                "AppColumn_rank": 44,
                "AppColumn_AppTable_id": "sprint",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "sprint_stop",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "date",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_id": {
                "AppColumn_id": "story_id",
                "AppColumn_title": "story_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "story_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_title": {
                "AppColumn_id": "story_title",
                "AppColumn_title": "Title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_description": {
                "AppColumn_id": "story_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_rank": {
                "AppColumn_id": "story_rank",
                "AppColumn_title": "Story Rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_status_id": {
                "AppColumn_id": "story_status_id",
                "AppColumn_title": "Status",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "147px",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "story_project_id": {
                "AppColumn_id": "story_project_id",
                "AppColumn_title": "Project",
                "AppColumn_description": null,
                "AppColumn_rank": 60,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_project_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "project_id"
            },
            "story_sprint_id": {
                "AppColumn_id": "story_sprint_id",
                "AppColumn_title": "Sprint",
                "AppColumn_description": null,
                "AppColumn_rank": 10007,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_sprint_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "sprint_id"
            },
            "story_points": {
                "AppColumn_id": "story_points",
                "AppColumn_title": "Story Points",
                "AppColumn_description": null,
                "AppColumn_rank": 10008,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_points",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_hours_planned": {
                "AppColumn_id": "story_hours_planned",
                "AppColumn_title": "Hours Planned",
                "AppColumn_description": null,
                "AppColumn_rank": 10009,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_hours_planned",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "story_hours_spent": {
                "AppColumn_id": "story_hours_spent",
                "AppColumn_title": "Hours Spent",
                "AppColumn_description": null,
                "AppColumn_rank": 10010,
                "AppColumn_AppTable_id": "story",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "story_hours_spent",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_id": {
                "AppColumn_id": "task_id",
                "AppColumn_title": "task_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "task_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_title": {
                "AppColumn_id": "task_title",
                "AppColumn_title": "task_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 50,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_description": {
                "AppColumn_id": "task_description",
                "AppColumn_title": "Description",
                "AppColumn_description": null,
                "AppColumn_rank": 500,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_description",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_rank": {
                "AppColumn_id": "task_rank",
                "AppColumn_title": "task_rank",
                "AppColumn_description": null,
                "AppColumn_rank": 30,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_rank",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "task_status_id": {
                "AppColumn_id": "task_status_id",
                "AppColumn_title": "task_status_id",
                "AppColumn_description": null,
                "AppColumn_rank": 40,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_status_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "status_id"
            },
            "task_story_id": {
                "AppColumn_id": "task_story_id",
                "AppColumn_title": "task_story_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "task",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "task_story_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "story_id"
            },
            "user_id": {
                "AppColumn_id": "user_id",
                "AppColumn_title": "user_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": true,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "user_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_title": {
                "AppColumn_id": "user_title",
                "AppColumn_title": "user_title",
                "AppColumn_description": null,
                "AppColumn_rank": 20,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": "100%",
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_title",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 80,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_login": {
                "AppColumn_id": "user_login",
                "AppColumn_title": "user_login",
                "AppColumn_description": null,
                "AppColumn_rank": 10003,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_login",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 80,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_password_hash": {
                "AppColumn_id": "user_password_hash",
                "AppColumn_title": "user_password_hash",
                "AppColumn_description": null,
                "AppColumn_rank": 10004,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_password_hash",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 100,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_active": {
                "AppColumn_id": "user_active",
                "AppColumn_title": "user_active",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_active",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "bit",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": "('0')",
                "AppColumn_related_pk_id": null
            },
            "user_email": {
                "AppColumn_id": "user_email",
                "AppColumn_title": "user_email",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_email",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 80,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "user_phone": {
                "AppColumn_id": "user_phone",
                "AppColumn_title": "user_phone",
                "AppColumn_description": null,
                "AppColumn_rank": 10007,
                "AppColumn_AppTable_id": "user",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "user_phone",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 30,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_user_id": {
                "AppColumn_id": "audit_user_id",
                "AppColumn_title": "audit_user_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10001,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_user_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "user_id"
            },
            "audit_AppTable_id": {
                "AppColumn_id": "audit_AppTable_id",
                "AppColumn_title": "audit_AppTable_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10002,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": true,
                "AppColumn_column_name": "audit_AppTable_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": "AppTable_id"
            },
            "audit_table_id": {
                "AppColumn_id": "audit_table_id",
                "AppColumn_title": "audit_table_id",
                "AppColumn_description": null,
                "AppColumn_rank": 10003,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_table_id",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "integer",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_update_type": {
                "AppColumn_id": "audit_update_type",
                "AppColumn_title": "audit_update_type",
                "AppColumn_description": null,
                "AppColumn_rank": 10004,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_update_type",
                "AppColumn_is_nullable": "NO",
                "AppColumn_data_type": "character varying",
                "AppColumn_character_maximum_length": 6,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_update_time": {
                "AppColumn_id": "audit_update_time",
                "AppColumn_title": "audit_update_time",
                "AppColumn_description": null,
                "AppColumn_rank": 10005,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_update_time",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "datetimeoffset",
                "AppColumn_character_maximum_length": null,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            },
            "audit_field_changes": {
                "AppColumn_id": "audit_field_changes",
                "AppColumn_title": "audit_field_changes",
                "AppColumn_description": null,
                "AppColumn_rank": 10006,
                "AppColumn_AppTable_id": "audit",
                "AppColumn_ui_hidden": null,
                "AppColumn_ui_minwidth": null,
                "AppColumn_read_only": null,
                "AppColumn_column_name": "audit_field_changes",
                "AppColumn_is_nullable": "YES",
                "AppColumn_data_type": "text",
                "AppColumn_character_maximum_length": 2147483647,
                "AppColumn_column_default": null,
                "AppColumn_related_pk_id": null
            }
        }
    },
    "navigate": {
        "navTable": "story",
        "navTableID": "",
        "navParentTable": "project",
        "navStrParentID": "38",
        "navActiveFilter": false,
        "navOutline": [
            {
                "itemKey": "category",
                "itemTitle": "Categories",
                "table": "category",
                "closedItem": false,
                "inProgress": false,
                "children": [
                    {
                        "itemKey": "categorycategory2",
                        "itemTitle": "Work",
                        "table": "category",
                        "tableID": 2,
                        "children": [
                            {
                                "itemKey": "categorycategory2project",
                                "itemTitle": "Projects",
                                "table": "project",
                                "parentTable": "category",
                                "parentID": 2,
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorycategory2projectproject8",
                                        "itemTitle": "Portfolio: \"Project\" React App",
                                        "table": "project",
                                        "tableID": 8,
                                        "parentTable": "category",
                                        "parentID": 2,
                                        "children": [
                                            {
                                                "itemKey": "categorycategory2projectproject8story",
                                                "itemTitle": "Stories",
                                                "table": "story",
                                                "parentTable": "project",
                                                "parentID": 8,
                                                "closedItem": false,
                                                "inProgress": false,
                                                "children": [
                                                    {
                                                        "itemKey": "categorycategory2projectproject8storystory225",
                                                        "itemTitle": "Publish to GitHub using GPL based FOSS license",
                                                        "table": "story",
                                                        "tableID": 225,
                                                        "parentTable": "project",
                                                        "parentID": 8,
                                                        "children": [],
                                                        "closedItem": false,
                                                        "inProgress": false
                                                    },
                                                    {
                                                        "itemKey": "categorycategory2projectproject8storystory225story210",
                                                        "itemTitle": "Refactor and split out \"ViewModelAPI\"",
                                                        "table": "story",
                                                        "tableID": 210,
                                                        "parentTable": "project",
                                                        "parentID": 8,
                                                        "children": [],
                                                        "closedItem": true,
                                                        "inProgress": false
                                                    },
                                                    {
                                                        "itemKey": "categorycategory2projectproject8storystory225story210story215",
                                                        "itemTitle": "Fix 'any' TS types of IAppState, ViewModel* files",
                                                        "table": "story",
                                                        "tableID": 215,
                                                        "parentTable": "project",
                                                        "parentID": 8,
                                                        "children": [],
                                                        "closedItem": true,
                                                        "inProgress": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "closedItem": false,
                                        "inProgress": true
                                    }
                                ]
                            }
                        ],
                        "closedItem": false,
                        "inProgress": true
                    },
                    {
                        "itemKey": "categorycategory2category3",
                        "itemTitle": "Continuing Education",
                        "table": "category",
                        "tableID": 3,
                        "children": [
                            {
                                "itemKey": "categorycategory2category3project",
                                "itemTitle": "Projects",
                                "table": "project",
                                "parentTable": "category",
                                "parentID": 3,
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorycategory2category3projectproject19",
                                        "itemTitle": "Javascript Studies & Client Side Libraries",
                                        "table": "project",
                                        "tableID": 19,
                                        "parentTable": "category",
                                        "parentID": 3,
                                        "children": [
                                            {
                                                "itemKey": "categorycategory2category3projectproject19story",
                                                "itemTitle": "Stories",
                                                "table": "story",
                                                "parentTable": "project",
                                                "parentID": 19,
                                                "closedItem": false,
                                                "inProgress": false,
                                                "children": [
                                                    {
                                                        "itemKey": "categorycategory2category3projectproject19storystory220",
                                                        "itemTitle": "Javascript iterators and generators",
                                                        "table": "story",
                                                        "tableID": 220,
                                                        "parentTable": "project",
                                                        "parentID": 19,
                                                        "children": [],
                                                        "closedItem": false,
                                                        "inProgress": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "closedItem": false,
                                        "inProgress": false
                                    },
                                    {
                                        "itemKey": "categorycategory2category3projectproject19project38",
                                        "itemTitle": "Server Side Development Technologies",
                                        "table": "project",
                                        "tableID": 38,
                                        "parentTable": "category",
                                        "parentID": 3,
                                        "children": [
                                            {
                                                "itemKey": "categorycategory2category3projectproject19project38story",
                                                "itemTitle": "Stories",
                                                "table": "story",
                                                "parentTable": "project",
                                                "parentID": 38,
                                                "closedItem": false,
                                                "inProgress": false,
                                                "children": [
                                                    {
                                                        "itemKey": "categorycategory2category3projectproject19project38storystory217",
                                                        "itemTitle": "Research ExpressJS alternatives & add-ons; Fastify",
                                                        "table": "story",
                                                        "tableID": 217,
                                                        "parentTable": "project",
                                                        "parentID": 38,
                                                        "children": [],
                                                        "closedItem": false,
                                                        "inProgress": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "closedItem": false,
                                        "inProgress": false
                                    }
                                ]
                            }
                        ],
                        "closedItem": false,
                        "inProgress": true
                    }
                ]
            },
            {
                "itemKey": "categorysprint",
                "itemTitle": "Sprints",
                "table": "sprint",
                "closedItem": false,
                "inProgress": false,
                "children": [
                    {
                        "itemKey": "categorysprintsprint10",
                        "itemTitle": "Backlog",
                        "table": "sprint",
                        "tableID": 10,
                        "children": [
                            {
                                "itemKey": "categorysprintsprint10story",
                                "itemTitle": "Stories",
                                "table": "story",
                                "parentTable": "sprint",
                                "parentID": 10,
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintsprint10storystory217",
                                        "itemTitle": "Research ExpressJS alternatives & add-ons; Fastify",
                                        "table": "story",
                                        "tableID": 217,
                                        "parentTable": "sprint",
                                        "parentID": 10,
                                        "children": [],
                                        "closedItem": false,
                                        "inProgress": false
                                    },
                                    {
                                        "itemKey": "categorysprintsprint10storystory217story220",
                                        "itemTitle": "Javascript iterators and generators",
                                        "table": "story",
                                        "tableID": 220,
                                        "parentTable": "sprint",
                                        "parentID": 10,
                                        "children": [],
                                        "closedItem": false,
                                        "inProgress": false
                                    },
                                    {
                                        "itemKey": "categorysprintsprint10storystory217story220story225",
                                        "itemTitle": "Publish to GitHub using GPL based FOSS license",
                                        "table": "story",
                                        "tableID": 225,
                                        "parentTable": "sprint",
                                        "parentID": 10,
                                        "children": [],
                                        "closedItem": false,
                                        "inProgress": false
                                    }
                                ]
                            },
                            {
                                "itemKey": "categorysprintsprint10storyproject~story",
                                "itemTitle": "Projects & Stories",
                                "table": "project~story",
                                "parentTable": "sprint",
                                "parentID": 10,
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10",
                                        "itemTitle": "Server Side Development Technologies",
                                        "table": "project~story",
                                        "tableID": "38~10",
                                        "parentTable": "sprint",
                                        "parentID": 10,
                                        "children": [
                                            {
                                                "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10story",
                                                "itemTitle": "Stories",
                                                "table": "story",
                                                "parentTable": "project~story",
                                                "parentID": "38~10",
                                                "closedItem": false,
                                                "inProgress": false,
                                                "children": [
                                                    {
                                                        "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10storystory217",
                                                        "itemTitle": "Research ExpressJS alternatives & add-ons; Fastify",
                                                        "table": "story",
                                                        "tableID": 217,
                                                        "parentTable": "project~story",
                                                        "parentID": "38~10",
                                                        "children": [],
                                                        "closedItem": false,
                                                        "inProgress": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "closedItem": false,
                                        "inProgress": true
                                    },
                                    {
                                        "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10project~story19~10",
                                        "itemTitle": "Javascript Studies & Client Side Libraries",
                                        "table": "project~story",
                                        "tableID": "19~10",
                                        "parentTable": "sprint",
                                        "parentID": 10,
                                        "children": [
                                            {
                                                "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10project~story19~10story",
                                                "itemTitle": "Stories",
                                                "table": "story",
                                                "parentTable": "project~story",
                                                "parentID": "19~10",
                                                "closedItem": false,
                                                "inProgress": false,
                                                "children": [
                                                    {
                                                        "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10project~story19~10storystory220",
                                                        "itemTitle": "Javascript iterators and generators",
                                                        "table": "story",
                                                        "tableID": 220,
                                                        "parentTable": "project~story",
                                                        "parentID": "19~10",
                                                        "children": [],
                                                        "closedItem": false,
                                                        "inProgress": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "closedItem": false,
                                        "inProgress": true
                                    },
                                    {
                                        "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10project~story19~10project~story8~10",
                                        "itemTitle": "Portfolio: \"Project\" React App",
                                        "table": "project~story",
                                        "tableID": "8~10",
                                        "parentTable": "sprint",
                                        "parentID": 10,
                                        "children": [
                                            {
                                                "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10project~story19~10project~story8~10story",
                                                "itemTitle": "Stories",
                                                "table": "story",
                                                "parentTable": "project~story",
                                                "parentID": "8~10",
                                                "closedItem": false,
                                                "inProgress": false,
                                                "children": [
                                                    {
                                                        "itemKey": "categorysprintsprint10storyproject~storyproject~story38~10project~story19~10project~story8~10storystory225",
                                                        "itemTitle": "Publish to GitHub using GPL based FOSS license",
                                                        "table": "story",
                                                        "tableID": 225,
                                                        "parentTable": "project~story",
                                                        "parentID": "8~10",
                                                        "children": [],
                                                        "closedItem": false,
                                                        "inProgress": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "closedItem": false,
                                        "inProgress": true
                                    }
                                ]
                            }
                        ],
                        "closedItem": false,
                        "inProgress": false
                    },
                    {
                        "itemKey": "categorysprintsprint10sprint16",
                        "itemTitle": "Sprint 01/06-01/12/2020",
                        "table": "sprint",
                        "tableID": 16,
                        "children": [
                            {
                                "itemKey": "categorysprintsprint10sprint16story",
                                "itemTitle": "Stories",
                                "table": "story",
                                "parentTable": "sprint",
                                "parentID": 16,
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintsprint10sprint16storystory210",
                                        "itemTitle": "Refactor and split out \"ViewModelAPI\"",
                                        "table": "story",
                                        "tableID": 210,
                                        "parentTable": "sprint",
                                        "parentID": 16,
                                        "children": [],
                                        "closedItem": true,
                                        "inProgress": false
                                    },
                                    {
                                        "itemKey": "categorysprintsprint10sprint16storystory210story215",
                                        "itemTitle": "Fix 'any' TS types of IAppState, ViewModel* files",
                                        "table": "story",
                                        "tableID": 215,
                                        "parentTable": "sprint",
                                        "parentID": 16,
                                        "children": [],
                                        "closedItem": true,
                                        "inProgress": false
                                    }
                                ]
                            },
                            {
                                "itemKey": "categorysprintsprint10sprint16storyproject~story",
                                "itemTitle": "Projects & Stories",
                                "table": "project~story",
                                "parentTable": "sprint",
                                "parentID": 16,
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintsprint10sprint16storyproject~storyproject~story8~16",
                                        "itemTitle": "Portfolio: \"Project\" React App",
                                        "table": "project~story",
                                        "tableID": "8~16",
                                        "parentTable": "sprint",
                                        "parentID": 16,
                                        "children": [
                                            {
                                                "itemKey": "categorysprintsprint10sprint16storyproject~storyproject~story8~16story",
                                                "itemTitle": "Stories",
                                                "table": "story",
                                                "parentTable": "project~story",
                                                "parentID": "8~16",
                                                "closedItem": false,
                                                "inProgress": false,
                                                "children": [
                                                    {
                                                        "itemKey": "categorysprintsprint10sprint16storyproject~storyproject~story8~16storystory210",
                                                        "itemTitle": "Refactor and split out \"ViewModelAPI\"",
                                                        "table": "story",
                                                        "tableID": 210,
                                                        "parentTable": "project~story",
                                                        "parentID": "8~16",
                                                        "children": [],
                                                        "closedItem": true,
                                                        "inProgress": false
                                                    },
                                                    {
                                                        "itemKey": "categorysprintsprint10sprint16storyproject~storyproject~story8~16storystory210story215",
                                                        "itemTitle": "Fix 'any' TS types of IAppState, ViewModel* files",
                                                        "table": "story",
                                                        "tableID": 215,
                                                        "parentTable": "project~story",
                                                        "parentID": "8~16",
                                                        "children": [],
                                                        "closedItem": true,
                                                        "inProgress": false
                                                    }
                                                ]
                                            }
                                        ],
                                        "closedItem": true,
                                        "inProgress": true
                                    }
                                ]
                            }
                        ],
                        "closedItem": true,
                        "inProgress": false
                    }
                ]
            },
            {
                "itemKey": "categorysprintAppTable",
                "itemTitle": "Apptables",
                "table": "AppTable",
                "closedItem": false,
                "inProgress": false,
                "children": [
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumn",
                        "itemTitle": "AppColumn",
                        "table": "AppTable",
                        "tableID": "AppColumn",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "AppColumn",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_id",
                                        "itemTitle": "AppColumn_id",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_id",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_title",
                                        "itemTitle": "AppColumn_title",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_title",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_description",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rank",
                                        "itemTitle": "AppColumn_rank",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_id",
                                        "itemTitle": "AppColumn_AppTable_id",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_AppTable_id",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hidden",
                                        "itemTitle": "AppColumn_ui_hidden",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_ui_hidden",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidth",
                                        "itemTitle": "Width (with units)",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_ui_minwidth",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidthAppColumnAppColumn_read_only",
                                        "itemTitle": "AppColumn_read_only",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_read_only",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidthAppColumnAppColumn_read_onlyAppColumnAppColumn_column_name",
                                        "itemTitle": "AppColumn_column_name",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_column_name",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidthAppColumnAppColumn_read_onlyAppColumnAppColumn_column_nameAppColumnAppColumn_is_nullable",
                                        "itemTitle": "AppColumn_is_nullable",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_is_nullable",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidthAppColumnAppColumn_read_onlyAppColumnAppColumn_column_nameAppColumnAppColumn_is_nullableAppColumnAppColumn_data_type",
                                        "itemTitle": "AppColumn_data_type",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_data_type",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidthAppColumnAppColumn_read_onlyAppColumnAppColumn_column_nameAppColumnAppColumn_is_nullableAppColumnAppColumn_data_typeAppColumnAppColumn_character_maximum_length",
                                        "itemTitle": "Max. Chars Allowed",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_character_maximum_length",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidthAppColumnAppColumn_read_onlyAppColumnAppColumn_column_nameAppColumnAppColumn_is_nullableAppColumnAppColumn_data_typeAppColumnAppColumn_character_maximum_lengthAppColumnAppColumn_column_default",
                                        "itemTitle": "Default value",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_column_default",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppColumnAppColumnAppColumn_idAppColumnAppColumn_titleAppColumnAppColumn_descriptionAppColumnAppColumn_rankAppColumnAppColumn_AppTable_idAppColumnAppColumn_ui_hiddenAppColumnAppColumn_ui_minwidthAppColumnAppColumn_read_onlyAppColumnAppColumn_column_nameAppColumnAppColumn_is_nullableAppColumnAppColumn_data_typeAppColumnAppColumn_character_maximum_lengthAppColumnAppColumn_column_defaultAppColumnAppColumn_related_pk_id",
                                        "itemTitle": "Related Column",
                                        "table": "AppColumn",
                                        "tableID": "AppColumn_related_pk_id",
                                        "parentTable": "AppTable",
                                        "parentID": "AppColumn",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTable",
                        "itemTitle": "AppTable",
                        "table": "AppTable",
                        "tableID": "AppTable",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "AppTable",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppColumnAppColumnAppTable_id",
                                        "itemTitle": "AppTable_id",
                                        "table": "AppColumn",
                                        "tableID": "AppTable_id",
                                        "parentTable": "AppTable",
                                        "parentID": "AppTable",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppColumnAppColumnAppTable_idAppColumnAppTable_title",
                                        "itemTitle": "AppTable_title",
                                        "table": "AppColumn",
                                        "tableID": "AppTable_title",
                                        "parentTable": "AppTable",
                                        "parentID": "AppTable",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppColumnAppColumnAppTable_idAppColumnAppTable_titleAppColumnAppTable_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "AppTable_description",
                                        "parentTable": "AppTable",
                                        "parentID": "AppTable",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppColumnAppColumnAppTable_idAppColumnAppTable_titleAppColumnAppTable_descriptionAppColumnAppTable_rank",
                                        "itemTitle": "AppTable_rank",
                                        "table": "AppColumn",
                                        "tableID": "AppTable_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "AppTable",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppColumnAppColumnAppTable_idAppColumnAppTable_titleAppColumnAppTable_descriptionAppColumnAppTable_rankAppColumnAppTable_table_name",
                                        "itemTitle": "AppTable_table_name",
                                        "table": "AppColumn",
                                        "tableID": "AppTable_table_name",
                                        "parentTable": "AppTable",
                                        "parentID": "AppTable",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategory",
                        "itemTitle": "category",
                        "table": "AppTable",
                        "tableID": "category",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "category",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppColumnAppColumncategory_id",
                                        "itemTitle": "ID",
                                        "table": "AppColumn",
                                        "tableID": "category_id",
                                        "parentTable": "AppTable",
                                        "parentID": "category",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppColumnAppColumncategory_idAppColumncategory_title",
                                        "itemTitle": "Title",
                                        "table": "AppColumn",
                                        "tableID": "category_title",
                                        "parentTable": "AppTable",
                                        "parentID": "category",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppColumnAppColumncategory_idAppColumncategory_titleAppColumncategory_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "category_description",
                                        "parentTable": "AppTable",
                                        "parentID": "category",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppColumnAppColumncategory_idAppColumncategory_titleAppColumncategory_descriptionAppColumncategory_rank",
                                        "itemTitle": "category_rank",
                                        "table": "AppColumn",
                                        "tableID": "category_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "category",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppColumnAppColumncategory_idAppColumncategory_titleAppColumncategory_descriptionAppColumncategory_rankAppColumncategory_status_id",
                                        "itemTitle": "Status",
                                        "table": "AppColumn",
                                        "tableID": "category_status_id",
                                        "parentTable": "AppTable",
                                        "parentID": "category",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableproject",
                        "itemTitle": "project",
                        "table": "AppTable",
                        "tableID": "project",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "project",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppColumnAppColumnproject_id",
                                        "itemTitle": "project_id",
                                        "table": "AppColumn",
                                        "tableID": "project_id",
                                        "parentTable": "AppTable",
                                        "parentID": "project",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppColumnAppColumnproject_idAppColumnproject_title",
                                        "itemTitle": "Title",
                                        "table": "AppColumn",
                                        "tableID": "project_title",
                                        "parentTable": "AppTable",
                                        "parentID": "project",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppColumnAppColumnproject_idAppColumnproject_titleAppColumnproject_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "project_description",
                                        "parentTable": "AppTable",
                                        "parentID": "project",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppColumnAppColumnproject_idAppColumnproject_titleAppColumnproject_descriptionAppColumnproject_rank",
                                        "itemTitle": "project_rank",
                                        "table": "AppColumn",
                                        "tableID": "project_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "project",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppColumnAppColumnproject_idAppColumnproject_titleAppColumnproject_descriptionAppColumnproject_rankAppColumnproject_status_id",
                                        "itemTitle": "Status",
                                        "table": "AppColumn",
                                        "tableID": "project_status_id",
                                        "parentTable": "AppTable",
                                        "parentID": "project",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppColumnAppColumnproject_idAppColumnproject_titleAppColumnproject_descriptionAppColumnproject_rankAppColumnproject_status_idAppColumnproject_category_id",
                                        "itemTitle": "project_category_id",
                                        "table": "AppColumn",
                                        "tableID": "project_category_id",
                                        "parentTable": "AppTable",
                                        "parentID": "project",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprint",
                        "itemTitle": "sprint",
                        "table": "AppTable",
                        "tableID": "sprint",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "sprint",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumnAppColumnsprint_id",
                                        "itemTitle": "sprint_id",
                                        "table": "AppColumn",
                                        "tableID": "sprint_id",
                                        "parentTable": "AppTable",
                                        "parentID": "sprint",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumnAppColumnsprint_idAppColumnsprint_title",
                                        "itemTitle": "Title",
                                        "table": "AppColumn",
                                        "tableID": "sprint_title",
                                        "parentTable": "AppTable",
                                        "parentID": "sprint",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumnAppColumnsprint_idAppColumnsprint_titleAppColumnsprint_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "sprint_description",
                                        "parentTable": "AppTable",
                                        "parentID": "sprint",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumnAppColumnsprint_idAppColumnsprint_titleAppColumnsprint_descriptionAppColumnsprint_rank",
                                        "itemTitle": "sprint_rank",
                                        "table": "AppColumn",
                                        "tableID": "sprint_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "sprint",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumnAppColumnsprint_idAppColumnsprint_titleAppColumnsprint_descriptionAppColumnsprint_rankAppColumnsprint_status_id",
                                        "itemTitle": "Status",
                                        "table": "AppColumn",
                                        "tableID": "sprint_status_id",
                                        "parentTable": "AppTable",
                                        "parentID": "sprint",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumnAppColumnsprint_idAppColumnsprint_titleAppColumnsprint_descriptionAppColumnsprint_rankAppColumnsprint_status_idAppColumnsprint_start",
                                        "itemTitle": "Start Date",
                                        "table": "AppColumn",
                                        "tableID": "sprint_start",
                                        "parentTable": "AppTable",
                                        "parentID": "sprint",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppColumnAppColumnsprint_idAppColumnsprint_titleAppColumnsprint_descriptionAppColumnsprint_rankAppColumnsprint_status_idAppColumnsprint_startAppColumnsprint_stop",
                                        "itemTitle": "End Date",
                                        "table": "AppColumn",
                                        "tableID": "sprint_stop",
                                        "parentTable": "AppTable",
                                        "parentID": "sprint",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatus",
                        "itemTitle": "status",
                        "table": "AppTable",
                        "tableID": "status",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "status",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppColumnAppColumnstatus_id",
                                        "itemTitle": "status_id",
                                        "table": "AppColumn",
                                        "tableID": "status_id",
                                        "parentTable": "AppTable",
                                        "parentID": "status",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppColumnAppColumnstatus_idAppColumnstatus_title",
                                        "itemTitle": "status_title",
                                        "table": "AppColumn",
                                        "tableID": "status_title",
                                        "parentTable": "AppTable",
                                        "parentID": "status",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppColumnAppColumnstatus_idAppColumnstatus_titleAppColumnstatus_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "status_description",
                                        "parentTable": "AppTable",
                                        "parentID": "status",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppColumnAppColumnstatus_idAppColumnstatus_titleAppColumnstatus_descriptionAppColumnstatus_rank",
                                        "itemTitle": "status_rank",
                                        "table": "AppColumn",
                                        "tableID": "status_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "status",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestory",
                        "itemTitle": "story",
                        "table": "AppTable",
                        "tableID": "story",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "story",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_id",
                                        "itemTitle": "story_id",
                                        "table": "AppColumn",
                                        "tableID": "story_id",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_title",
                                        "itemTitle": "Title",
                                        "table": "AppColumn",
                                        "tableID": "story_title",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "story_description",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_descriptionAppColumnstory_rank",
                                        "itemTitle": "Story Rank",
                                        "table": "AppColumn",
                                        "tableID": "story_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_descriptionAppColumnstory_rankAppColumnstory_status_id",
                                        "itemTitle": "Status",
                                        "table": "AppColumn",
                                        "tableID": "story_status_id",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_descriptionAppColumnstory_rankAppColumnstory_status_idAppColumnstory_project_id",
                                        "itemTitle": "Project",
                                        "table": "AppColumn",
                                        "tableID": "story_project_id",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_descriptionAppColumnstory_rankAppColumnstory_status_idAppColumnstory_project_idAppColumnstory_sprint_id",
                                        "itemTitle": "Sprint",
                                        "table": "AppColumn",
                                        "tableID": "story_sprint_id",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_descriptionAppColumnstory_rankAppColumnstory_status_idAppColumnstory_project_idAppColumnstory_sprint_idAppColumnstory_points",
                                        "itemTitle": "Story Points",
                                        "table": "AppColumn",
                                        "tableID": "story_points",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_descriptionAppColumnstory_rankAppColumnstory_status_idAppColumnstory_project_idAppColumnstory_sprint_idAppColumnstory_pointsAppColumnstory_hours_planned",
                                        "itemTitle": "Hours Planned",
                                        "table": "AppColumn",
                                        "tableID": "story_hours_planned",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppColumnAppColumnstory_idAppColumnstory_titleAppColumnstory_descriptionAppColumnstory_rankAppColumnstory_status_idAppColumnstory_project_idAppColumnstory_sprint_idAppColumnstory_pointsAppColumnstory_hours_plannedAppColumnstory_hours_spent",
                                        "itemTitle": "Hours Spent",
                                        "table": "AppColumn",
                                        "tableID": "story_hours_spent",
                                        "parentTable": "AppTable",
                                        "parentID": "story",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletask",
                        "itemTitle": "task",
                        "table": "AppTable",
                        "tableID": "task",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "task",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppColumnAppColumntask_id",
                                        "itemTitle": "task_id",
                                        "table": "AppColumn",
                                        "tableID": "task_id",
                                        "parentTable": "AppTable",
                                        "parentID": "task",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppColumnAppColumntask_idAppColumntask_title",
                                        "itemTitle": "task_title",
                                        "table": "AppColumn",
                                        "tableID": "task_title",
                                        "parentTable": "AppTable",
                                        "parentID": "task",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppColumnAppColumntask_idAppColumntask_titleAppColumntask_description",
                                        "itemTitle": "Description",
                                        "table": "AppColumn",
                                        "tableID": "task_description",
                                        "parentTable": "AppTable",
                                        "parentID": "task",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppColumnAppColumntask_idAppColumntask_titleAppColumntask_descriptionAppColumntask_rank",
                                        "itemTitle": "task_rank",
                                        "table": "AppColumn",
                                        "tableID": "task_rank",
                                        "parentTable": "AppTable",
                                        "parentID": "task",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppColumnAppColumntask_idAppColumntask_titleAppColumntask_descriptionAppColumntask_rankAppColumntask_status_id",
                                        "itemTitle": "task_status_id",
                                        "table": "AppColumn",
                                        "tableID": "task_status_id",
                                        "parentTable": "AppTable",
                                        "parentID": "task",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppColumnAppColumntask_idAppColumntask_titleAppColumntask_descriptionAppColumntask_rankAppColumntask_status_idAppColumntask_story_id",
                                        "itemTitle": "task_story_id",
                                        "table": "AppColumn",
                                        "tableID": "task_story_id",
                                        "parentTable": "AppTable",
                                        "parentID": "task",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableaudit",
                        "itemTitle": "audit",
                        "table": "AppTable",
                        "tableID": "audit",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "audit",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppColumnAppColumnaudit_user_id",
                                        "itemTitle": "audit_user_id",
                                        "table": "AppColumn",
                                        "tableID": "audit_user_id",
                                        "parentTable": "AppTable",
                                        "parentID": "audit",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppColumnAppColumnaudit_user_idAppColumnaudit_AppTable_id",
                                        "itemTitle": "audit_AppTable_id",
                                        "table": "AppColumn",
                                        "tableID": "audit_AppTable_id",
                                        "parentTable": "AppTable",
                                        "parentID": "audit",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppColumnAppColumnaudit_user_idAppColumnaudit_AppTable_idAppColumnaudit_table_id",
                                        "itemTitle": "audit_table_id",
                                        "table": "AppColumn",
                                        "tableID": "audit_table_id",
                                        "parentTable": "AppTable",
                                        "parentID": "audit",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppColumnAppColumnaudit_user_idAppColumnaudit_AppTable_idAppColumnaudit_table_idAppColumnaudit_update_type",
                                        "itemTitle": "audit_update_type",
                                        "table": "AppColumn",
                                        "tableID": "audit_update_type",
                                        "parentTable": "AppTable",
                                        "parentID": "audit",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppColumnAppColumnaudit_user_idAppColumnaudit_AppTable_idAppColumnaudit_table_idAppColumnaudit_update_typeAppColumnaudit_update_time",
                                        "itemTitle": "audit_update_time",
                                        "table": "AppColumn",
                                        "tableID": "audit_update_time",
                                        "parentTable": "AppTable",
                                        "parentID": "audit",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppColumnAppColumnaudit_user_idAppColumnaudit_AppTable_idAppColumnaudit_table_idAppColumnaudit_update_typeAppColumnaudit_update_timeAppColumnaudit_field_changes",
                                        "itemTitle": "audit_field_changes",
                                        "table": "AppColumn",
                                        "tableID": "audit_field_changes",
                                        "parentTable": "AppTable",
                                        "parentID": "audit",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuser",
                        "itemTitle": "user",
                        "table": "AppTable",
                        "tableID": "user",
                        "children": [
                            {
                                "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumn",
                                "itemTitle": "Appcolumns",
                                "table": "AppColumn",
                                "parentTable": "AppTable",
                                "parentID": "user",
                                "closedItem": false,
                                "inProgress": false,
                                "children": [
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumnAppColumnuser_id",
                                        "itemTitle": "user_id",
                                        "table": "AppColumn",
                                        "tableID": "user_id",
                                        "parentTable": "AppTable",
                                        "parentID": "user",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumnAppColumnuser_idAppColumnuser_title",
                                        "itemTitle": "user_title",
                                        "table": "AppColumn",
                                        "tableID": "user_title",
                                        "parentTable": "AppTable",
                                        "parentID": "user",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumnAppColumnuser_idAppColumnuser_titleAppColumnuser_login",
                                        "itemTitle": "user_login",
                                        "table": "AppColumn",
                                        "tableID": "user_login",
                                        "parentTable": "AppTable",
                                        "parentID": "user",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumnAppColumnuser_idAppColumnuser_titleAppColumnuser_loginAppColumnuser_password_hash",
                                        "itemTitle": "user_password_hash",
                                        "table": "AppColumn",
                                        "tableID": "user_password_hash",
                                        "parentTable": "AppTable",
                                        "parentID": "user",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumnAppColumnuser_idAppColumnuser_titleAppColumnuser_loginAppColumnuser_password_hashAppColumnuser_active",
                                        "itemTitle": "user_active",
                                        "table": "AppColumn",
                                        "tableID": "user_active",
                                        "parentTable": "AppTable",
                                        "parentID": "user",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumnAppColumnuser_idAppColumnuser_titleAppColumnuser_loginAppColumnuser_password_hashAppColumnuser_activeAppColumnuser_email",
                                        "itemTitle": "user_email",
                                        "table": "AppColumn",
                                        "tableID": "user_email",
                                        "parentTable": "AppTable",
                                        "parentID": "user",
                                        "children": []
                                    },
                                    {
                                        "itemKey": "categorysprintAppTableAppTableAppColumnAppTableAppTableAppTablecategoryAppTableprojectAppTablesprintAppTablestatusAppTablestoryAppTabletaskAppTableauditAppTableuserAppColumnAppColumnuser_idAppColumnuser_titleAppColumnuser_loginAppColumnuser_password_hashAppColumnuser_activeAppColumnuser_emailAppColumnuser_phone",
                                        "itemTitle": "user_phone",
                                        "table": "AppColumn",
                                        "tableID": "user_phone",
                                        "parentTable": "AppTable",
                                        "parentID": "user",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "itemKey": "categorysprintAppTablestatus",
                "itemTitle": "Statuses",
                "table": "status",
                "closedItem": false,
                "inProgress": false,
                "children": [
                    {
                        "itemKey": "categorysprintAppTablestatusstatus1",
                        "itemTitle": "Not Started",
                        "table": "status",
                        "tableID": 1,
                        "children": []
                    },
                    {
                        "itemKey": "categorysprintAppTablestatusstatus1status2",
                        "itemTitle": "Started",
                        "table": "status",
                        "tableID": 2,
                        "children": []
                    },
                    {
                        "itemKey": "categorysprintAppTablestatusstatus1status2status3",
                        "itemTitle": "Completed",
                        "table": "status",
                        "tableID": 3,
                        "children": []
                    },
                    {
                        "itemKey": "categorysprintAppTablestatusstatus1status2status3status11",
                        "itemTitle": "Canceled",
                        "table": "status",
                        "tableID": 11,
                        "children": []
                    }
                ]
            },
            {
                "itemKey": "categorysprintAppTablestatususer",
                "itemTitle": "Users",
                "table": "user",
                "closedItem": false,
                "inProgress": false,
                "children": [
                    {
                        "itemKey": "categorysprintAppTablestatususeruser1",
                        "itemTitle": "Duke",
                        "table": "user",
                        "tableID": 1,
                        "children": []
                    }
                ]
            }
        ],
        "testDataMode": true
    }
}