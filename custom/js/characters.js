window.character = {

	'1' : {
		'title' : 'Luffy/Ace',
		'color' : 'dual',
		'class' : 'freespirit, fighter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Tăng ATK của FREE SPIRIT lên 3 cấp (20 giây), tăng DEF lên 3 cấp (20 giây), tấn công trong một phạm vi lớn phía trước, gây một lượng sát thương bằng với (ATK x 0.65).',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của FREESPIRIT lên 5 cấp, tăng tỉ lệ crit lên 2 cấp cho FREE SPIRIT.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Có 50% cơ hội tránh tê liệt (paralysis)'
		},
		'pattern': 'Strong Atk → Strong Atk → Heal lv1 → Strong Atk',
		'img' : {
			'src' : 'luffy_ace.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_class_fs, skill_def_up, skill_def_up_class_fs, skill_deal_dmg, hs_atk_up, hs_atk_up_class_fs, hs_crit_up, hs_crit_up_class_fs, target_nearby, ability_prevent_para',
	},

	'2' : {
		'title' : 'Bartolomeo/Cavendish',
		'color' : 'dual',
		'class' : 'driven, striker, slasher',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (ATK x 0.8) sát thương cho một vùng rộng theo hàng ngang. Tăng tỉ lệ xuất hiện khiên chắn của DRIVEN lên 7 cấp (21 giây). Tăng ATK của DRIVEN lên 7 cấp (21 giây).',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên chắn cho DRIVEN lên 3 cấp. Tăng ATK của bản thân lên 8 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi 50HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk',
		'img' : {
			'src' : 'barto_caven.png'
		},
		'tags': 'skill_deal_dmg, skill_guard_up, skill_guard_up_class_driven, skill_atk_up, skill_atk_up_class_driven, hs_guard_up, hs_atk_up, hs_atk_up_self, target_nearby, ability_heal',
	},

	'3' : {
		'title' : 'Sanji/Judge',
		'color' : 'dual',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây 1250 sát thương cho kẻ địch ở tầm trung theo hàng ngang. Tăng ATK của POWERHOUSE lên 6 cấp (20 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hơn hoặc bằng 50%, tăng HP của POWERHOUSE lên 5 cấp và tăng ATK bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Tấn công địch có ATK cao nhất',
			'extra_ability' : 'Có 50% cơ hội tránh khóa chiêu (silence)',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 → Normal Atk',
		'img' : {
			'src' : 'sanji_judge.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_atk_up_class_ph, hs_hp_up, hs_hp_up_class_ph, hs_atk_up, hs_atk_up_self, target_highest_atk, ability_prevent_silence',
	},

	'4' : {
		'title' : 'Luffy/Law',
		'color' : 'dual',
		'class' : 'fighter, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Gây 1700 sát thương chuẩn cho tất cả kẻ địch. Gây thêm sát thương băng với (ATK x 1.45) cho một kẻ địch ngẫu nhiên. Tăng ATK của đồng mình lên 2 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'ATK đồng đội tăng lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'luffy_law.png'
		},
		'tags': 'skill_fixed_dmg, skill_deal_dmg, skill_atk_up, skill_atk_up_all, hs_atk_up, hs_atk_up_all, target_nearby, ability_heal',
	},

	'5' : {
		'title' : 'Sabo/Koala',
		'color' : 'dual',
		'class' : 'freespirit, cerebral',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tấn công vùng lớn phía trước với sát thường bằng (ATK x 0.65), giảm DEF 3 cấp (25 giây). Tấn công vùng nhỏ phía trước với sát thương bằng (ATK x 1.15).',
		},
		'hidden_skill' : {
			'des' : 'FREESPIRIT/CEREBRAL tăng CRIT  lên 5 cấp, tăng SPEED lên 2 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '50% cơ hộ tránh tê liệt (paralysis)',
		},
		'pattern': 'Atk → Strong → Heal lv1 (small) → Atk',
		'img' : {
			'src' : 'sabo_koala.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_def_down_all, hs_crit_up, hs_crit_up_class_cerebral, hs_crit_up_class_fs, hs_speed_up, hs_speed_up_class_cerebral, hs_speed_up_class_fs, target_nearby, ability_prevent_crit',
	},

	'6' : {
		'title' : 'Whitebeard V1',
		'color' : 'str',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Giảm 48% máu toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hoặc bằng 30%, toàn bộ đồng đội tăng ATK lên 8 cấp, tăng DEF bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội chặn sát thương theo thời gian',
		},
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'whitebeard_v1.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_all, hs_atk_up, hs_atk_up_all, hs_def_up, hs_def_up_self, target_nearby, ability_prevent_stack_dmg',
	},

	'7' : {
		'title' : 'Lucci V1',
		'color' : 'str',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 4850 sát thương chuẩn lên 1 kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK POWERHOUSE lên 6 cấp, giảm DEF đi 2 cấp. Trong 25 giây đầu tăng ATK bản thân lên 18 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ thù ở gần',
			'extra_ability' : '70% cơ hội tránh tê liệt (paralysis)',
		},
		'pattern': 'Strong Atk → Normal Atk → Normal Atk → Fullpower Atk',
		'img' : {
			'src' : 'lucci_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_atk_up_class_ph, hs_def_down, hs_def_down_ally, hs_atk_up, hs_atk_up_self, target_nearby, ability_prevent_para',
	},

	'8' : {
		'title' : 'Crocodile V1',
		'color' : 'str',
		'class' : 'cerebral, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 19 Giây',
			'des' : 'Giảm HP của kẻ địch đi 24% và tăng CRIT của đồng đội lên 4 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của CEREBRAL lên 6 cấp. Khi HP nhỏ hơn hoặc bằng 60%, tăng ATK bản thân lên 8 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP sau mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'crocodile_v1.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_all, skill_crit_up, skill_crit_up_all, hs_atk_up, hs_atk_up_class_cerebral, hs_atk_up_self',
	},

	'9' : {
		'title' : 'Akainu V1',
		'color' : 'str',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Gây 1150 sát thương chuẩn cho vùng lớn, gây 1900 sát thương chuẩn nếu trận chiến còn 50 giây hoặc nhỏ hơn, gây 3150 sát thương chuẩn nếu còn 30 giây hoặc nhỏ hơn',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STRc lên 6 cấp. Tăng thêm 2 cấp nếu còn 30 giây hoặc ít hơn'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng nếu HP nhỏ hơn hoặc bằng 50%',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'akainu_v1.png'
		},
		'tags': 'skill_fixed_dmg, hs_atk_up, hs_atk_up_color_str, target_nearby, ability_heal',
	},

	'10' : {
		'title' : 'Inuarashi',
		'color' : 'str',
		'class' : 'cerebral, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Giảm HP bản thân đi 20%, tấn công kẻ địch ở tầm ngang với sát thương bằng với (ATK x 1.95)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của CEREBRAL lên 6 cấp, tăng ATK của bản thân lên 9 cấp nếu HP dưới 60%.'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội tránh khóa chiêu (silence)',
		},
		'pattern': 'Strong Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'inuarashi.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_self, skill_deal_dmg, hs_speed_up, hs_atk_up, hs_atk_up_self',
	},

	'11' : {
		'title' : 'Bigmom V1',
		'color' : 'str',
		'class' : 'powerhouse, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 51 Giây',
			'des' : 'Tấn công kẻ địch ở hàng ngang phía trước với sát thương bằng (ATK x 0.95), tấn công kẻ địch ở hàng giữa theo chiều dọc với sát thương bằng (ATK x 1.2), tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 0.9). Tăng ATK bản thân lên 16 cấp trong 30 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP của STRc, QCKc, DEXc lên 7 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '70% cơ hội chặn tê liệt (paralysis)',
		},
		'pattern': 'Normal Atk →  Normal Atk → Normal Atk → Fullpower Atk',
		'img' : {
			'src' : 'bigmom_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_self, hs_hp_up, hs_hp_up_self, target_nearby, ability_prevent_para',
	},

	'12' : {
		'title' : 'Bullet',
		'color' : 'str',
		'class' : 'fighter, driven',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 20 Giây',
			'des' : 'Tăng ATK bản thân lên 11 cấp (15 giây), tăng DEF bản thân lên 8 leves (15 giây), bật trạng thái khiêu khích (sẽ bị kẻ địch nhắm vào). Giảm 20% máu của kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'STRc, QCKc, INTc tăng ATK lên 6 cấp. Các đồng đội khác tăng ATK lên 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : '50% tránh tê liệt (paralysis)',
		},
		'pattern': 'Normal Atk → Strong Atk → Normal Atk → Strong Atk',
		'img' : {
			'src' : 'bullet.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_self, skill_def_up, skill_def_up_self, skill_lock_target, skill_cut_hp, hs_atk_up, hs_atk_up_color_str, hs_atk_up_color_qck, hs_atk_up_color_int, hs_atk_up_all, target_nearby, ability_prevent_para',
	},

	'13' : {
		'title' : 'Log Luffy',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Tấn công kẻ địch ở tầm trung gây (ATK x 1.35) sát thương và tăng SPEED của đồng đội lên 3 cấp nếu còn 50 giây hoặc ít hơn',
		},
		'hidden_skill' : {
			'des' : 'STRc tăng ATK lên 5 cấp. ATK bản thân tăng 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào mục tiêu ở gần',
			'extra_ability' : 'Khi HP nhỏ hơn hoặc bằng 50%, hồi 100HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'log_luffy.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_up, skill_speed_up_all, target_nearby, ability_heal',
	},

	'14' : {
		'title' : 'Zoro V1',
		'color' : 'dex',
		'class' : 'slasher, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Tấn công toàn bộ kẻ địch với sát thương bằng (ATK x 1.35) và giảm DEF kẻ địch đi 3 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng CRIT của SLASHER lên 6 cấp, ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có ATK cao nhất',
			'extra_ability' : '70% cơ hội tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk → Strong Atk',
		'img' : {
			'src' : 'zoro_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, hs_crit_up_class_slasher, hs_crit_up, hs_atk_up, hs_atk_up_self, target_nearby, ability_prevent_para',
	},

	'15' : {
		'title' : 'Nami V1',
		'color' : 'dex',
		'class' : 'cerebral, striker',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Gây (ATK x 1.1) sát thương một vùng lớn và có 30% cơ hội làm tê liệt kẻ địch (paralysis).',
		},
		'hidden_skill' : {
			'des' : 'Tăng DEXc SPEED lên 6 cấp, tăng tốc CT đồng minh lên 2 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Self healing lv2 → Strong Atk → Heal lv1 (small)',
		'img' : {
			'src' : 'nami_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hs_speed_up, hs_speed_up_color_dex, hs_ct_up, hs_ct_up_color_dex, target_nearby, ability_heal',
	},

	'16' : {
		'title' : 'Usopp',
		'color' : 'dex',
		'class' : 'shooter',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Giảm HP của kẻ địch hàng trước đi 37%, có 75% cơ hội khóa chiêu (9 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của SHOOTER lên 6 cấp, ATK bản thân lên 6 cấp khi HP nhỏ hơn hoặc bằng 50%. ATK bản thân lên 7 cấp khi HP dưới 30%.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch có SPEED cao nhất',
			'extra_ability' : '70% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Self healing lv2 → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'usopp.png'
		},
		'tags': 'skill_cut_hp, skill_silence_enemies, hs_speed_up, hs_speed_up_class_shooter, hs_atk_up, hs_atk_up_self',
	},

	'17' : {
		'title' : 'Ace V1',
		'color' : 'dex',
		'class' : 'shooter, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Giảm 50% HP bản thân, gây (ATK x 2) sát thương cho toàn bộ địch và tăng ATK của SHOOTER lên 4 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của SHOOTER/FREESPIRIT lên 6 cấp. Trong 60 giây đầu tăng ATK bản thân lên 10 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao nhất',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'ace_v1.png'
		},
		'tags': 'skill_cut_hp, skill_cut_hp_self, skill_deal_dmg, skill_atk_up, skill_atk_up_class_shooter, hs_speed_up, hs_speed_up_class_shooter, hs_speed_up_class_fs, hs_atk_up, hs_atk_up_self, target_highest_atk, ability_prevent_para',
	},

	'18' : {
		'title' : 'Corazon',
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Hồi (2.75 x RCV) HP một vùng rộng và tăng DEF cho một vùng nhỏ lên 7 cấp (10 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 70%, ATK của đồng đội tăng 10 cấp. Trong 40 giây đầu, giảm tốc độ tích nộ và SPEED của kẻ địch QCKc đi 5 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Khi HP bản thân nhỏ hơn hoặc bằng 50%, Hồi 200 HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Heal lv3 (small) → Normal Atk → Heal lv2 (small)',
		'img' : {
			'src' : 'corazon.png'
		},
		'tags': 'skill_heal, skill_def_up, hs_atk_up, target_nearby, ability_heal, hs_ct_down, hs_ct_down_color_qck, hs_speed_down, hs_speed_down_color_qck',
	},

	'19' : {
		'title' : 'Magellan',
		'color' : 'dex',
		'class' : 'striker, shooter',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây sát thương theo thời gian (cấp 3) lên một vùng lớn kẻ địch trong 48 giây. Làm chậm nộ của kẻ địch đi 4 cấp (44 giây).',
		},
		'hidden_skill' : {
			'des' : 'Giảm DEF QCKc đi 2 cấp. Khi có 5 hoặc nhiều hơn đồng minh ở trên sân, tăng HP đồng minh thêm 7 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Self Heal lv2 → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'magellan.png'
		},
		'tags': 'skill_atk_down, skill_ct_down, hs_hp_up, target_nearby, ability_heal, hs_def_down, hs_def_down_color_qck',
	},

	'20' : {
		'title' : 'Rayleigh V2',
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Gây 1700 sát thương chuẩn một vùng lớn, tăng ATK của đồng đội lên 5 cấp (16 giây), tăng DEF lên 5 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng mình lên 5 cấp, khi còn dưới 60% HP, tăng DEF đồng minh lên 5 cấp, tăng tỉ lệ bật khiên lên 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : '80% tránh tê liệt',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'rayleigh_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_def_up, hs_hp_up, hs_def_up, hs_guard_up target_nearby, ability_prevent_bind'
	},

	'21' : {
		'title' : 'Jinbe V2',
		'color' : 'dex',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm 32% HP kẻ địch một vùng rộng. Tăng ATK của FIGHTER, SLASHER và SHOOTER lên 4 cấp trong 25 giây. Tăng DEF của FIGHTER, SLASHER và SHOOTER lên 4 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP của STRc, DEXc, PSYc lên 6 cấp, tăng DEF lên 1 cấp. Tăng MISS của kẻ địch lên 1 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Self healing lv2',
		'img' : {
			'src' : 'jinbe_v2.png'
		},
		'tags': 'skill_cut_hp, skill_atk_up, skill_atk_up_class_fighter, skill_atk_up_class_shooter, skill_atk_up_class_slasher, skill_def_up, skill_def_up_class_fighter, skill_def_up_class_shooter, skill_def_up_class_slasher, hs_hp_up, hs_hp_up_color_str, hs_hp_up_color_dex, hs_hp_up_color_psy, hs_def_up, hs_miss_up, target_nearby, ability_heal'
	},

	'22' : {
		'title' : 'Doflamingo V2',
		'color' : 'dex',
		'class' : 'driven, cerebral',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (ATK x 1.45) sát thương cho kẻ địch ở tầm trung. Tiếp tục gây thêm (ATK x 0.35) sát thương nếu còn 60 giây. Tiếp tục gây thêm (ATK x 04) sát thương nếu còn 45 giây. Tiếp tục gây thêm (ATK x 0.45) sát thương nếu còn 30 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của CEREBRAL lên 6 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'dof_v2.png'
		},
		'tags': 'skill_deal_dmg, hs_atk_up, hs_atk_up_class_cerebral, target_nearby, ability_heal'
	},

	'23' : {
		'title' : 'Brook',
		'color' : 'dex',
		'class' : 'slasher, freespirit',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Hồi 2450 HP cho đồng mình ở hàng trung tâm và tăng DEF lên 3 cấp (30 Giây).',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh lên 5 cấp. Khi HP nhỏ hơn hoặc bằng 50%, tăng DEF bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Heal lv1 (small) → Normal Atk → Heal lv2 (small)',
		'img' : {
			'src' : 'brook.png'
		},
		'tags': 'skill_heal, skill_def_up, hs_atk_up, hs_def_up, hs_def_up_self, target_nearby, ability_prevent_para'
	},

	'24' : {
		'title' : 'Blackbeard, Power to Plunder the World Asunder',
		'color' : 'dex',
		'class' : 'driven, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Giảm HP địch đi 35% toàn bộ địch. Gây 2000 sát thương chuẩn cho kẻ địch STRc/QCKc và giảm DEF của chúng đi 4 cấp trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK toàn bộ đồng minh lên 7 cấp. Tăng ATK bản thân lên 3 cấp. Tăng HP đồng minh DEXc lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch thấp máu.',
			'extra_ability' : 'Miễn nhiễm tê liệt.',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'blackbeard_v1_dex.png'
		},
		'tags': 'skill_cut_hp, skill_fixed_dmg, skill_def_down, hs_atk_up, hs_hp_up, target_low_hp, ability_prevent_para'
	},

	'25' : {
		'title' : 'Kaido',
		'color' : 'dex',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 55 Giây',
			'des' : 'Giảm HP kẻ địch ở hàng trước đi 25%, và gây (ATK x 2.1) sát thương',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của POWERHOUSE/STRIKER lên 6 cấp, ATK bản thân lên 7 cấp. Làm chậm CT bản thân đi 6 cấp.'
		},
		'others' : {
			'target' : 'Nhắm vào kẻ địch ít máu nhất',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'kaido.png'
		},
		'tags': 'skill_cut_hp, skill_deal_dmg, hs_atk_up, hs_atk_up_class_ph, hs_atk_up_class_striker, hs_atk_up_self, hs_ct_down, target_low_hp'
	},

	'26' : {
		'title' : 'Kuzan, Unfaithful Beliefs of Justice <span class="ht-none">Aokiji</span>',
		'color' : 'qck',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (ATK x 2) sát thương cho một vùng lớn. 70% cơ hội khóa skill của kẻ địch có ATK cao nhất trong 6 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng minh STRc/DEXc/QCKc lên 5 cấp. Trong 40 giây đầu, tăng SPEED đồng minh STRc/DEXc/QCKc lên 5 cấp. Trong 40 giây đầu, tăng ATK đồng minh STRc/DEXc/QCKc lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao.',
			'extra_ability' : '50% tránh khóa skill',
		},
		'pattern': 'Normal Atk → Fullpower Atk → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'kuzan_v3.png'
		},
		'tags': 'skill_deal_dmg, skill_silence_enemies, hs_speed_up, hs_speed_up_color_str, hs_speed_up_color_dex, hs_speed_up_color_qck, ability_prevent_silence, target_highest_speed'
	},

	'27' : {
		'title' : 'Mihawk & Perona',
		'color' : 'dual',
		'class' : 'cerebral, slasher, driven',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Giảm ATK của địch đi 5 cấp và DEF đi 3 cấp trong 25 giây, giảm HP địch đi 25%',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng đội lên 5 cấp, HP lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa hành động (bind)',
		},
		'pattern': 'Normal Atk → Self healing lv2 → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'mihawk_perona.png'
		},
		'tags': 'skill_atk_down, skill_def_down, skill_cut_hp, hs_speed_up, hs_hp_up, target_nearby, ability_prevent_bind'
	},

	'28' : {
		'title' : 'Marco the Phoenix, Illusion Flame Beast',
		'color' : 'qck',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Tấn công một vùng với lượng sát thường (ATK x 0.55), giảm ATK 2 cấp trong 15 giây, hồi phục HP một đồng đội bằng (1.86 x RCV)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hơn hoặc bằng 50%, tăng tỉ lệ xuất hiện khiên của QCKc và PSYc lên 7 cấp. Tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Khi HP dưới 50%, hồi  200HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Self Heal lv2',
		'img' : {
			'src' : 'marco.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_down, skill_heal, hidden_skill_guard_up, hidden_skill_guard_up_color_qck, hidden_skill_guard_up_color_psy, hs_atk_up, hs_atk_up_self, ability_heal'
	},

	'29' : {
		'title' : 'Red Hair Pirates, Pirates Fighting for the Sake of their Friend',
		'color' : 'dual',
		'class' : 'slasher, cerebral',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Giảm HP vùng rộng theo hàng ngang đi 21%. Tăng DEF đồng đội lên 4 cấp (14 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi trận đấu còn 70s, đồng đội tăng DEF lên 5 cấp, ATK bản thân tăng 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa skill',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1',
		'img' : {
			'src' : 'red_hair_pirates.png'
		},
		'tags': 'skill_cut_hp, skill_def_up, hs_def_up, hs_atk_up, hs_atk_up_self, ability_prevent_silence, target_nearby'
	},

	'30' : {
		'title' : 'Arlong pirates',
		'color' : 'dual',
		'class' : 'slasher, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Khi HP lớn hơn hoặc bằng 30%, tăng ATK đồng đội lên 3 cấp trong 15 giây, tấn công kẻ địch tầm trung bình (ATK x 1.3) sát thương. Khi HP nhỏ hơn hoặc bằng 30%, tăng ATK đồng đội lên 4 cấp trong 15 giây, tấn công kẻ địch tầm trung bình (ATK x 1.55) sát thương',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK bản thân lên 5 cấp. Khi HP nhỏ hơn hoặc bằng 30%, ATK bản thân tăng 5 cấp, DEF bản thân tăng 4 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa hành động',
		},
		'pattern': 'Normal Atk → Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'arlong_pirates.png'
		},
		'tags': 'skill_atk_up, skill_deal_dmg, hs_atk_up, hs_atk_up_self, target_nearby, ability_prevent_bind'
	},

	'31' : {
		'title' : 'Pudding',
		'color' : 'int',
		'class' : 'cerebral, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Tăng nộ INTc lên thêm 25%, tăng ATK đồng minh lên 4 cấp (25 giây), tăng ATK của đồng minh có ATK cao nhất lên 8 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP INTc lên 5 cấp, tăng ATK của INTc có ATK cao nhất lên 3 cấp. Giảm ATK SLASHER/POWERHOUSE đi 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 → Normal Atk',
		'img' : {
			'src' : 'pudding.png'
		},
		'tags': 'skill_ct_up, skill_atk_up, hs_hp_up, hs_hp_up_color_int, target_nearby, ability_prevent_silence, hs_atk_down, hs_atk_down_class_slasher, hs_atk_down_class_ph'
	},

	'32' : {
		'title' : 'Nami & Robin',
		'color' : 'dual',
		'class' : 'cerebral, striker, freespirit',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Giảm 30% HP một vùng rộng, rút ngắn thời gian bị tê liệt của đồng đội đi 10 giây, tăng CRIT lên 3 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng RCV đồng minh lên 5 cấp, tăng tỉ lệ xuất hiện khiên lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 → Normal Atk',
		'img' : {
			'src' : 'nami_robin.png'
		},
		'tags': 'skill_cut_hp, skill_para_down, skill_crit_up, hidden_skill_rcv_up hidden_skill_guard_up, target_nearby, ability_prevent_para'
	},

	'33' : {
		'title' : 'Robin',
		'color' : 'int',
		'class' : 'cerebral, fighter',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Tăng tỉ lệ xuất hiện khiên lên 7 cấp (25 giây), 80% tỉ lệ khóa chiêu vùng kẻ địch phía trước (12 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên của CEREBRAL lên 6 cấp, tăng DEF CEREBRAL lên 3 cấp trong 25 giây đầu.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi máu dưới 50%, Hồi phục 150HP mỗi lượt',
		},
		'pattern': 'heal lv1 → Atk → heal lv2',
		'img' : {
			'src' : 'robin.png'
		},
	},

	'34' : {
		'title' : 'Sabo V2',
		'color' : 'qck',
		'class' : 'fighter, freespirit',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Tấn công một vùng rộng ở phía trước, gây (ATK x 0.9) sát thương và tăng ATK của STRc, DEXc, QCKc lên 6 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, tăng SPEED của STRc, DEXc, QCKc lên 3 cấp. Tăng SPEED của STRc, DEXc, QCKc lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heavy Atk → Heal lv1 (Small range) → Normal Atk',
		'img' : {
			'src' : 'sabo_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_color_str, skill_atk_up_color_qck, skill_atk_up_color_dex, hs_speed_up, hs_speed_up_color_qck, hs_speed_up_color_dex, hs_speed_up_color_str, target_nearby, ability_prevent_silence'
	},

	'35' : {
		'title' : 'Sabo V3',
		'color' : 'dex',
		'class' : 'fighter, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 1.15) sát thương cho một vùng lớn ở phía trước. FIGHTER/SHOOTER/FREESPIRIT tăng ATK lên 2 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, FIGHTER/SHOOTER/FREESPIRIT tăng ATK lên 6 cấp, ATK bản thân tăng 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sabo_v3.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_class_shooter, skill_atk_up_class_fighter, skill_atk_up_class_fs, hs_atk_up, hs_atk_up_class_fighter, hs_atk_up_class_shooter, hs_atk_up_class_fs, target_nearby, ability_prevent_silence'
	},

	'36' : {
		'title' : 'O-Soba Mask',
		'color' : 'qck',
		'class' : 'powerhouse, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Gây (ATK x 1.35) sát thương cho kẻ địch tầm trung tâm và tăng tỉ lệ đánh trượt lên 4 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK cả team lên 5 cấp, ATK bản thân lên 4 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sanji_v3.png'
		},
		'tags': 'skill_deal_dmg, skill_miss_up, hs_atk_up, hs_atk_up_self, target_nearby, ability_prevent_silence'
	},

	'37' : {
		'title' : 'Luffy & Zoro',
		'color' : 'dual',
		'class' : 'slasher, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 1.35) sát thương cho một vùng lớn theo hàng ngang, tăng tỉ lệ CRIT cho FREESPIRIT và SLASHER lên 3 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi CRIT, tăng ATK FREESPIRIT/SLASHER lên 6 cấp, cộng dồn 2 lần. Trong 30 giây đầu tăng CRIT FREESPIRIT/SLASHER lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa hành động',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'luffy_zoro.png'
		},
		'tags': 'skill_deal_dmg, skill_crit_up, skill_crit_up_class_fs, skill_crit_up_class_slasher, hs_atk_up, hs_atk_up_class_fs, hs_atk_up_class_slasher, hs_crit_up, hs_crit_up_class_fs, hs_crit_up_class_slasher, target_nearby, ability_prevent_bind'
	},

	'38' : {
		'title' : 'Chopper',
		'color' : 'psy',
		'class' : 'shooter, cerebral',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Hồi (0.6 x RCV) HP cho đồng đội trung tâm, giảm 7 giây trói, giảm 7 giây tê liệt, giảm 7 giây khóa chiêu',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gàn',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heal lv2 → Normal Atk',
		'img' : {
			'src' : 'chopper.png'
		},
		'tags': 'skill_heal, skill_bind_down, skill_silence_down, skill_para_down, hs_hp_up, target_nearby, ability_prevent_silence'
	},

	'39' : {
		'title' : 'Lucci V2',
		'color' : 'qck',
		'class' : 'shooter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Giảm DEF vùng lớn kẻ địch theo hàng ngang đi 7 cấp, gây (ATK x 1.5) sát thương.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED SHOOTER lên 7 cấp. Khi CRIT, ATK bản thân tăng 5 cấp, cộng dồn tối đa 3 lần'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Khi máu dưới 50%, hồi 150HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'lucci_v2.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, hs_speed_up, hs_speed_up_class_shooter, hs_atk_up, hs_atk_up_self, target_highest_atk, ability_heal'
	},

	'40' : {
		'title' : 'Komurasaki, Orian"s Final Moment',
		'color' : 'int',
		'class' : 'slasher, cerebral',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Hồi (2 x RCV) HP cho một vùng lớn. Tăng CRIT đồng minh QCKc/INTc lên 7 cấp trong 20 giây. Tăng ATK đồng minh QCKc/INTc lên 7 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'QCKc/INTc tăng RCV lên 5 cấp. QCKc/INTc tăng DEF lên 3 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 250HP mỗi lượt. Giảm 30% sát thương đến từ kẻ địch PSYc',
		},
		'pattern': 'Normal Atk → Heal lv1 → Normal Atk → Heal lv3',
		'img' : {
			'src' : 'komurasaki.png'
		},
		'tags': 'skill_heal, skill_crit_up, skill_atk_up, hs_rcv_up, hs_def_up, target_nearby, ability_heal, ability_dmg_reduce'
	},

	'41' : {
		'title' : 'Ace V2',
		'color' : 'int',
		'class' : 'shooter, fighter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (ATK x 0.7) sát thương lên một vùng rộng, tăng ATK FIGHTER/SHOOTER lên 4 cấp (20 giây) và rút ngắn thời gian trạng thái khóa (block) đi 11 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER/SHOOTER lên 5 cấp. Tăng tốc tích nộ cho đồng minh FIGHTER/SHOOTER lên 2 cấp khi còn 70s'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'ace_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_bind_down, hs_hp_up, hs_ct_up'
	},

	'42' : {
		'title' : 'Katakuri V1',
		'color' : 'int',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tấn công một vùng lớn theo hàng ngang gây (ATK x 0.9) sát thương và giảm SPEED kẻ địch đi 6 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đánh lùi của đồng minh lên 6 cấp. Khi đẩy lùi 1 kẻ địch, Tăng ATK bản thân lên 7 cấp, cộng dồn 2 lần.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : '70% tránh khóa hành động',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'katakuri.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_down, hs_blow_up, hs_atk_up'
	},

	'43' : {
		'title' : 'Whitebread v2',
		'color' : 'qck',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm HP một vùng nhỏ kẻ địch đi 26%, tăng DEF một lượng lớn đồng đội lên 4 cấp (25 giây). Khi HP nhỏ hoặc bằng 50% tăng ATK lên 5 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP STRIKER/POWERHOUSE lên 6 cấp, khi HP nhỏ hoặc bằng 40% tăng DEF lên 3 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'whitebeard_v2.png'
		},
		'tags': 'skill_cut_hp, skill_def_up, skill_atk_up, hs_hp_up, hs_def_up'
	},

	'44' : {
		'title' : 'Stampede Luffy',
		'color' : 'psy',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Khi HP lớn hoặc bằng 50%, ATK bản thân tăng 10 cấp (15 giây). Gây (ATK x 1.95) sát thương một vùng',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STRc, DEXc, PSYc lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower atk',
		'img' : {
			'src' : 'stampede_luffy.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_self, skill_deal_dmg, hs_atk_up, hs_atk_up_color_str, hs_atk_up_color_dex, hs_atk_up_color_psy, target_nearby, ability_prevent_para'
	},

	'45' : {
		'title' : 'Shirahoshi & Mansherry',
		'color' : 'dual',
		'class' : 'cerebral, striker',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Hồi (2.5 x RCV) HP cho đồng đội, rút ngắn thời gian tê liệt 6 giây, rút ngắn thời gian trói 6 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP STRIKER/CEREBRAL/FREESPIRIT lên 5 cấp. Khi HP nhỏ hoặc bằng 50%, tăng HP lên 3 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'shira_sherry.png'
		},
		'tags': 'skill_heal, skill_para_down, skill_bind_down, hs_hp_up'
	},

	'46' : {
		'title' : 'Vivi & Rebecca',
		'color' : 'dual',
		'class' : 'cerebral, striker, freespirit',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Tất cả kẻ địch giảm DEF 3 cấp (30 giây). STRIKER/CEREBRAL tăng ATK 3 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 70 giây, STRIKER/CEREBRAL tăng ATK 7 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'vivi_rebecca.png'
		},
		'tags': 'skill_def_down, skill_atk_up, hs_atk_up'
	},

	'47' : {
		'title' : 'Inuarashi & Nekomamushi',
		'color' : 'dual',
		'class' : 'cerebral, striker, slasher',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Tấn công một vùng nhỏ phía trước, gây (ATK x 0.85) sát thương. CEREBRAL/STRIKER ATK tăng 6 cấp (25 giây), hồi HP toàn bộ đồng đội bằng (0.45 x RCV)',
		},
		'hidden_skill' : {
			'des' : 'Trong 45 giây đầu, CEREBRAL/STRIKER tăng SPEED lên 5 cấp, tăng ATK bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt (paralysis)',
		},
		'pattern': 'Atk → Strong Atk → Heal lv1 (small) → Strong atk',
		'img' : {
			'src' : 'inu_neko.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_heal, hs_speed_up, hs_atk_up, target_nearby, ability_prevent_para'
	},

	'48' : {
		'title' : 'Zeus & Prometheus & Bigmom',
		'color' : 'dual',
		'class' : 'powerhouse, striker, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Tấn công một vùng lớn phía trước, gây (ATK x 1.25) sát thương. Nếu HP lớn hoặc bằng 50%, tăng ATK đồng đội lên 3 cấp',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng đội lên 7 cấp, HP lên 2 cấp, DEF giảm 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'zeus_prometheus_bm.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_atk_up, hs_hp_up, hs_def_down'
	},

	'49' : {
		'title' : 'Fujitora V2',
		'color' : 'int',
		'class' : 'powerhouse, slasher',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Tấn công toàn bộ địch, gây (ATK x 1.25) sát thương. Có 30% khóa mục tiêu',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đẩy lùi của SLASHER lên 6 cấp. Tăng HP SLASHER lên 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'fujitora_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_bind_enemies, hs_blow_up, hs_hp_up'
	},

	'50' : {
		'title' : 'Roronoa Zoro, Breaking Out of the Cage',
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Tăng ATK đồng minh SLASHER lên 6 cấp trong 20 giây. Gây (ATK x 2) sát thương một vùng lớn kẻ địch phía trước.',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đánh lui lên 6 cấp đối với đồng minh slasher. Tăng ATK đồng mình SLASHER lên 5 cấp. Tăng DEF bản thân lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao.',
			'extra_ability' : 'Miễn nhiễm tê liệt.',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'zoro_v2.png'
		},
		'tags': 'skill_atk_up, skill_deal_dmg, hs_blow_up, hs_atk_up, hs_def_up, target_highest_def, ability_prevent_para'
	},

	'51' : {
		'title' : 'Mihawk V2',
		'color' : 'dex',
		'class' : 'freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Trong 30 giây đầu, cắt 15% HP một vùng lớn kẻ địch. Khi còn 70 giây, cắt 30% HP vùng lớn kẻ địch. Tăng ATK DEXc lên 7 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'SLASHER tăng SPEED 7 cấp. Tăng HP SLASHER lên 2 cấp. Trong 40 giây đầu, tăng ATK bản thân lên 10 cấp và CRIT bản thân lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao nhất',
			'extra_ability' : 'Miễn nhiễm khóa skill. Giảm 30% sát thương nhận từ kẻ địch QCKc.',
		},
		'pattern': 'Strong Attack → Normal Atk → Fullpower Atk → Strong Atk',
		'img' : {
			'src' : 'mihawk_v2.png'
		},
		'tags': 'skill_cut_hp, skill_atk_up, hs_speed_up, hs_hp_up, hs_atk_up, hs_crit_up, ability_prevent_silence, ability_dmg_reduce'
	},

	'52' : {
		'title' : 'Charlotte Cracker, Fear of the Infinite Biscuits',
		'color' : 'qck',
		'class' : 'powerhouse, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây (ATK x 1.8) sát thương cho kẻ địch một vùng rộng. Tăng CRIT SLASHER/POWERHOUSE lên 7 cấp (15 giây). Khi HP nhỏ hoặc bằng 50%, tăng nộ bản thân lên 25%',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc độ tích nộ đồng minh SLASHER/POWERHOUSE lên 6 cấp. Tăng SPEED đồng minh SLASHER/POWERHOUSE lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm sát thương đến từ kẻ địch STRc đi 30%.',
		},
		'pattern': 'Normal Attack → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'legend_cracker_qck.png'
		},
		'tags': 'skill_deal_dmg, skill_crit_up, skill_ct_up, hs_ct_up, hs_speed_up, target_nearby, ability_prevent_bind, ability_dmg_reduce'
	},

	'53' : {
		'title' : 'Doflamingo V1',
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 2) sát thương cho ba kẻ địch, tăng DEF lên 5 cấp và CRIT lên 6 cấp cho SLASHER/DRIVEN (19 giây).',
		},
		'hidden_skill' : {
			'des' : 'SLASHER/DRIVEN tăng HP lên 6 cấp. Trong 30 giây đầu, Tăng DEF lên 3 cấp và ATK lên 6 cấp cho SLASHER/DRIVEN.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP dưới 50%, hồi 150HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Normal Atk → Heal Lv2',
		'img' : {
			'src' : 'doflamingo_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, skill_def_up_class_slasher, skill_def_up_class_driven, skill_crit_up, skill_crit_up_class_slasher, skill_crit_up_class_driven, hs_hp_up, hs_hp_up_class_driven, hs_hp_up_class_slasher, hs_def_up, hs_def_up_class_driven, hs_def_up_class_slasher, hs_atk_up, hs_atk_up_class_slasher, hs_atk_up_class_driven, target_nearby, ability_heal'
	},

	'54' : {
		'title' : 'Hancock V2',
		'color' : 'psy',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây 1300 sát thương chuẩn cho 3 kẻ địch, tăng ATK SHOOTER/FREESPIRIT lên 6 cấp (23 giây) và CRIT lên 4 cấp',
		},
		'hidden_skill' : {
			'des' : 'SHOOTER/FREESPIRIT CRIT tăng 6 cấp. Khi CRIT, tăng ATK SHOOTER/FREESPIRIT lên 2 cấp, cộng dồn 4 lần.'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Hồi 200HP mỗi lượt',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'hancock_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_crit_up, hs_crit_up, hs_atk_up, ability_heal'
	},

	'55' : {
		'title' : 'Nekomamushi',
		'color' : 'psy',
		'class' : 'striker, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương cho vùng lớn ở phía trước, tăng DEF STRIKER lên 2 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'STRIKER HP tăng 6 cấp. Khi HP nhỏ hoặc bằng 60%, STRIKER tăng ATK 2 cấp'
		},
		'others' : {
			'target' : 'Đang cập nhật',
			'extra_ability' : 'Đang cập nhật',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'nekomamushi.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, hs_hp_up, hs_atk_up'
	},

	'56' : {
		'title' : 'Katakuri V2',
		'color' : 'psy',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (ATK x 1.65) sát thương cho một vùng nhỏ, hồi 25% máu',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER/SLASHER/SHOOTER/CEREBRAL/POWERHOUSE tăng ATK lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'katakuri_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_heal, skill_heal_self, hs_atk_up, hs_atk_up_class_shooter, hs_atk_up_class_fighter, hs_atk_up_class_slasher, hs_atk_up_class_shooter, hs_atk_up_class_cerebral, hs_atk_up_class_ph, target_highest_atk, ability_prevent_para'
	},

	'57' : {
		'title' : 'Snakeman',
		'color' : 'str',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Gây (ATK x 2.7) sát thương một vùng rộng phía trước theo hàng ngang',
		},
		'hidden_skill' : {
			'des' : '60 giây đầu tăng ATK đồng đội lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Atk → Atk → Strong → Full',
		'img' : {
			'src' : 'snakeman.png'
		},
		'tags': 'skill_deal_dmg, hs_atk_up, target_nearby, ability_prevent_para'
	},

	'58' : {
		'title' : 'Cavendish',
		'color' : 'qck',
		'class' : 'slasher, driven',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Gây (ATK x 0.6) sát thương cho vùng lớn kẻ địch, tăng ATK bản thân lên 20 cấp (30 giây), DEF lên 14 cấp (30 giây)',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 70 giây, tăng SPEED STRc/DEXc/QCKc lên 8 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'cavendish.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_self, skill_def_up_self, hs_speed_up, hs_speed_up_color_qck, hs_speed_up_color_str, hs_speed_up_color_dex, target_nearby, ability_prevent_para'
	},

	'59' : {
		'title' : 'Carrot',
		'color' : 'qck',
		'class' : 'slasher, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 39 Giây',
			'des' : 'Gây 2450 sát thương chuẩn cho vùng lớn kẻ địch phía trước, rút ngắn thời gian dùng skill của FIGHTER/SLASHER/STRIKER/SHOOTER/CEREBRAL đi 20%',
		},
		'hidden_skill' : {
			'des' : 'Tăng speed FIGHTER/SLASHER/STRIKER/SHOOTER/CEREBRAL lên 5 cấp, ATK bản thân tăng 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'carrot.png'
		},
		'tags': 'skill_fixed_dmg, skill_ct_shorten, hs_speed_up,hs_speed_up_class_fighter, hs_speed_up_class_shooter, hs_speed_up_class_slasher, hs_speed_up_class_cerebral, hs_atk_up, hs_atk_up_self, target_nearby, ability_prevent_para'
	},

	'60' : {
		'title' : 'Zephyr',
		'color' : 'qck',
		'class' : 'shooter, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Cắt 32% HP một vùng rộng, gây 1550 sát thương chuẩn lên kẻ địch trong 1 vùng nhỏ',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK SHOOTER lên 5 cấp. Tăng ATK bản thân lên 4 cấp nếu số đồng đội trong trận chỉ còn ít hơn hoặc bằng 5, lên 7 cấp nếu ít hơn hoặc bằng 3'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Strong Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'zephyr.png'
		},
		'tags': 'skill_cut_hp, skill_fixed_dmg, hs_atk_up, hs_atk_up_class_shooter, hs_atk_up_self, target_nearby, ability_prevent_para'
	},

	'61' : {
		'title' : 'Capone "Gang" Bege, Immovable Fortress',
		'color' : 'int',
		'class' : 'shooter, driven',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Cắt 30% HP một kẻ địch. Khóa mục tiêu vào bản thân trong 30 giây và tăng DEF SHOOTER lên 5 cấp trong 30 giây. Nếu HP dưới 50%, hồi phục 50% lượng máu tối đa.',
		},
		'hidden_skill' : {
			'des' : 'SHOOTER tăng HP lên 5 cấp. Khi còn 70 giây, tăng DEF bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '80% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Self Heal lv2',
		'img' : {
			'src' : 'bege.png'
		},
		'tags': 'skill_lock_target, skill_heal, skill_heal_self, skill_def_up, skill_def_up_class_shooter, hs_hp_up, hs_hp_up_class_shooter, hs_def_up, hs_def_up_self, target_nearby, ability_prevent_silence'
	},

	'62' : {
		'title' : 'Franky',
		'color' : 'qck',
		'class' : 'shooter, freespirit',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Cắt 21% HP một vùng rộng trước mặt, FIGHTER/SLASHER/STRIKER/SHOOTER tăng DEF lên 4 cấp (20 giây).Nếu số lượng địch nhiều hơn số lượng đồng đội là 3, tăng DEF 4 cấp (20 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER/SLASHER/STRIKER/SHOOTER lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Self Heal lv2',
		'img' : {
			'src' : 'franky.png'
		},
		'tags': 'skill_cut_hp, skill_def_up, skill_def_up_class_fighter, skill_def_up_class_slasher, skill_def_up_class_striker, skill_def_up_class_shooter, hs_hp_up, hs_hp_up_class_fighter, hs_hp_up_class_slasher, hs_hp_up_class_striker, hs_hp_up_class_shooter, target_nearby, ability_prevent_para'
	},

	'63' : {
		'title' : 'Garp',
		'color' : 'psy',
		'class' : 'powerhouse, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Cắt 45% HP hai kẻ địch, rút ngắn trạng thái khóa chiêu đi 20 giây, tăng ATK đồng minh lên 3 cấp trong 29 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK bản thân lên 7 cấp. Khi còn 70 giây, tăng tỉ lệ xuất hiện khiên của đồng đội lên 5 cấp, tăng ATK đồng đội lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'garp.png'
		},
		'tags': 'skill_cut_hp, skill_silence_down, skill_atk_up, hs_atk_up, hs_guard_up, ability_prevent_silence, hs_atk_up, target_nearby'
	},

	'64' : {
		'title' : 'Sanji V1',
		'color' : 'int',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Giảm DEF kẻ địch một vùng rộng đi 6 cấp trong 6 giây, gây (ATK x 2.15) sát thương',
		},
		'hidden_skill' : {
			'des' : 'INTc tăng ATK lên 6 cấp, tăng ATK bản thân lên 8 cấp khi trận đấu còn 50 giây'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sanji_v1.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, hs_atk_up, hs_atk_up_color_int, hs_atk_up_self, target_nearby, ability_prevent_para'
	},

	'65' : {
		'title' : 'God Enel',
		'color' : 'qck',
		'class' : 'shooter, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 55 Giây',
			'des' : 'Gây 2400 sát thương chuẩn lên toàn bộ kẻ địch, giảm DEF đi 4 cấp trong 40 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng đội lên 6 cấp, tăng DEF đồng đội có khả năng hồi phục cao nhất lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Miễn nhiễm tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Heal lv3',
		'img' : {
			'src' : 'enel.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, hs_hp_up, hs_def_up, target_nearby, ability_prevent_para'
	},

	'66' : {
		'title' : 'Shiki',
		'color' : 'qck',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Gây 1450 sát thương chuẩn một vùng rộng, giảm DEF đi 2 cấp trong 24 giây, và có 51% khả năng tê liệt kẻ địch trong 6 giây',
		},
		'hidden_skill' : {
			'des' : 'DEXc/QCKc/INTc tăng HP lên 5 cấp. Khi còn 80 giây, tăng ATK toàn bộ đồng đội lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Atk → Self heal lv2 → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'shiki.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_para_enemies, hs_hp_up, hs_hp_up_color_int, hs_hp_up_color_dex, hs_hp_up_color_qck, hs_atk_up, target_highest_speed'
	},

	'67' : {
		'title' : 'Whitebeard & Marco',
		'color' : 'dual',
		'class' : 'powerhouse, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Cắt 32% HP toàn bộ địch. Hồi HP bản thân bằng (RCV x 2.15)',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ xuất hiện khiên (GUARD) của tất cả đồng đội lên 5 cấp. Khi HP nhỏ hoặc bằng 50%, tăng DEF bản thân lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa skill',
		},
		'pattern': 'Atk → Atk → Self healing lv2',
		'img' : {
			'src' : 'whitebeard_marco.png'
		},
		'tags': 'skill_cut_hp, skill_heal, skill_heal_self, hs_guard_up, hs_def_up, hs_def_up_self, target_nearby, ability_prevent_silence'
	},

	'68' : {
		'title' : 'Sanji V2',
		'color' : 'psy',
		'class' : 'powerhouse, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Khi còn trên 50% HP, tăng ATK bản thân 12 cấp (15 giây), tấn công kẻ địch có ATK cao nhất 3 lần với sát thương bằng với (1.5 x ATK)',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER tăng SPEED lên 6 cấp. FIGHTER tăng ATK lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP cao',
			'extra_ability' : 'Miễn nhiễm tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'sanji_v2.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_self, skill_deal_dmg, hs_speed_up, hs_atk_up, hs_speed_up_class_fighter, target_nearby, ability_prevent_para'
	},

	'69' : {
		'title' : 'Judge',
		'color' : 'int',
		'class' : 'powerhouse, driven',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Gây (ATK x 0.8) sát thương cho một vùng nhỏ, tăng ATK POWERHOUSE lên 6 cấp trong 33 giây',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER/DRIVEN/POWERHOUSE tăng ATK lên 7 cấp. Khi Máu nhỏ hoặc bằng 20%, tăng DEF bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Normal Atk',
		'img' : {
			'src' : 'judge.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_class_ph, hs_atk_up, hs_atk_up_class_fighter, hs_atk_up_class_ph, hs_atk_up_class_driven, hs_def_up, hs_def_up_self, target_highest_atk, ability_prevent_para'
	},

	'70' : {
		'title' : 'Tesoro',
		'color' : 'qck',
		'class' : 'striker, driven',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây 1200 sát thương chuẩn một vùng rộng, đồng đội xung quanh tăng DEF lên 7 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc tích nộ của đồng đội lên 5 cấp. Khi HP lớn hoặc bằng 60%, DEF đồng đội tăng 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP nhỏ hơn 50%, hồi 100HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Normal Atk → Self Heal lv2',
		'img' : {
			'src' : 'tesoro.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_up, hs_ct_up, hs_def_up, target_nearby, ability_heal'
	},

	'71' : {
		'title' : 'Jinbe V1',
		'color' : 'int',
		'class' : 'fighter, powerhouse',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây (ATK x 1.3) sát thương trong một vùng rộng, giảm ATK đi 15 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'FIGHTER tăng HP lên 6 cấp, DEF lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 100HP mỗi vòng',
		},
		'pattern': 'Atk → Atk → Self healing lv2',
		'img' : {
			'src' : 'jinbe_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_down, hs_hp_up, hs_hp_up_class_fighter, hs_def_up, hs_def_up_class_fighter, target_nearby, ability_heal'
	},

	'72' : {
		'title' : 'Buggy',
		'color' : 'int',
		'class' : 'driven, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Đồng đội xung quanh tăng ATK lên 5 cấp (25 giây), SPEED lên 8 cấp (25 giây)',
		},
		'hidden_skill' : {
			'des' : 'SPEED tất cả đồng đội tăng lên 6 cấp. Tăng ATK bản thân lên 6 cấp khi CRIT, cộng dồn 3 lần'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 150HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Normal Atk',
		'img' : {
			'src' : 'buggy.png'
		},
		'tags': 'skill_atk_up, skill_speed_up, hs_speed_up, hs_atk_up, hs_atk_up_self, target_nearby, ability_heal'
	},

	'73' : {
		'title' : 'Kizaru',
		'color' : 'psy',
		'class' : 'slasher, shooter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Tấn công 4 kẻ địch với sát thương (ATK x 1). SLASHER/SHOOTER tăng ATK lên 7 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED của SLASHER/SHOOTER lên 6 cấp. Trong 30 giây đầu tăng tốc tích nộ của SLASHER/SHOOTER lên 4 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (range) → Fullpower Atk',
		'img' : {
			'src' : 'kizaru.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_class_slasher, skill_atk_up_class_shooter, hs_speed_up, hs_speed_up_class_slasher, hs_speed_up_class_shooter, hs_ct_up, hs_ct_up_class_slasher, hs_ct_up_class_shooter, target_nearby, ability_prevent_silence'
	},

	'74' : {
		'title' : 'Kuzan V2 <span class="ht-none">Aokiji</span>',
		'color' : 'psy',
		'class' : 'slasher, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Gây 1400 sát thương chuẩn lên toàn bộ địch. Giảm DEF và tốc độ tích nộ của STRc/INTc đi 5 cấp (28 giây)',
		},
		'hidden_skill' : {
			'des' : 'QCKc/PSYc SPEED tăng 6 cấp. QCKc/PSYc SPEED tăng lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'kuzan_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_def_down_color_str, skill_def_down_color_int, hs_speed_up, hs_speed_up_color_qck, hs_speed_up_color_qsy, target_nearby, ability_prevent_para, skill_ct_down, skill_ct_down_color_str, skill_ct_down_color_int, hs_speed_up, hs_speed_up_color_qsy, hs_speed_up_color_qck'
	},

	'75' : {
		'title' : 'Akainu V2',
		'color' : 'int',
		'class' : 'fighter, shooter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 37 Giây',
			'des' : 'Cắt 16% HP toàn bộ địch, DEF của QCKc/PSYc giảm 4 cấp (40 giây)',
		},
		'hidden_skill' : {
			'des' : 'STRc/INTc ATK tăng 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'akainu_v2.png'
		},
		'tags': 'skill_cut_hp, skill_def_down, skill_def_down_color_qck, skill_def_down_color_psy, hs_atk_up, hs_atk_up_color_str, hs_atk_up_color_int, target_highest_atk, ability_prevent_silence'
	},

	'76' : {
		'title' : 'Shanks V2',
		'color' : 'int',
		'class' : 'freespirit, cerebral',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Cắt 25% HP toàn bộ địch, giảm tỷ lệ xuất hiện khiên toàn bộ địch đi 6 cấp (25 giây), tăng CRIT của INTc lên 6 cấp trong 22 giây',
		},
		'hidden_skill' : {
			'des' : 'CRIT của INTc tăng 7 cấp. Khi CRIT, tăng ATK INTc lên 4 cấp, cộng dồn 4 lần'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Strong Atk',
		'img' : {
			'src' : 'shanks_v2.png'
		},
		'tags': 'skill_cut_hp, skill_guard_down, skill_crit_up, skill_crit_up_color_int, hs_crit_up, hs_crit_up_color_int, hs_atk_up, hs_atk_up_color_int, target_nearby, ability_prevent_para'
	},

	'77' : {
		'title' : 'Trafalgar Law, Former Warlord of the Sea',
		'color' : 'psy',
		'class' : 'freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 1300 sát thương chuẩn một vùng nhỏ. Gây sát thương theo thời gian (lv3) cho kẻ địch vùng đó trong 40 giây, giảm DEF đi 4 cấp (20 giây).',
		},
		'hidden_skill' : {
			'des' : 'HP đồng minh SLASHER/FREESPIRIT tăng 6 cấp. Khi còn 70 giây, Tăng RCV đồng minh SLASHER/FREESPIRIT lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'law_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, hs_hp_up, hs_hp_up_class_slasher, hs_hp_up_class_fs, hs_rcv_up, hs_rcv_up_class_slasher, hs_rcv_up_class_fs, target_highest_def, ability_prevent_silence'
	},

	'78' : {
		'title' : 'Bartolomeo',
		'color' : 'qck',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Gây (ATK x 1.2) sát thương cho một kẻ địch, chuyển trạng thái khiêu khích (28 giây). Tăng tỉ lệ xuất hiện khiên lên 10 cấp trong 28 giây',
		},
		'hidden_skill' : {
			'des' : 'DRIVEN/STRIKER tăng tỉ lệ xuất hiện khiên lên 6 cấp. Khi HP nhỏ hoặc bằng 30% tăng DEF DRIVEN/STRIKER lên 3 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Normal Atk → Heal lv2',
		'img' : {
			'src' : 'bartolomeo.png'
		},
		'tags': 'skill_deal_dmg, skill_lock_target, skill_guard_up, hs_guard_up, hs_guard_up_class_driven, hs_guard_up_class_striker, hs_def_up, hs_def_up_class_driven, hs_def_up_class_striker, target_highest_atk, ability_prevent_silence'
	},

	'79' : {
		'title' : 'Law V2',
		'color' : 'qck',
		'class' : 'cerebral, striker',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây 2850 sát thương chuẩn một vùng lớn và tăng CRIT của STRIKER lên 4 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Trong 50 giây đầu STRIKER tăng SPEED lên 8 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Miễn nhiễm khóa chiêu',
		},
		'pattern': 'Normal Atk → Strong Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'law_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_crit_up, skill_crit_up_class_striker, hs_speed_up, hs_speed_up_class_striker, target_nearby, ability_prevent_silence'
	},

	'80' : {
		'title' : 'Mihawk V1',
		'color' : 'int',
		'class' : 'slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Tấn công kẻ địch trong một vùng lớn phía trước, gây (ATK x 1.65) sát thương, và giảm tỉ lệ xuất hiện khiên đi 2 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'SLASHER ATK tăng 6 cấp. Khi kẻ địch bị đánh lùi, tăng ATK bản thân lên 6 cấp, cộng dồn 3 lần'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'mihawk_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_guard_down, hs_atk_up, hs_atk_up_class_slasher'
	},

	'81' : {
		'title' : 'Sengoku',
		'color' : 'int',
		'class' : 'fighter, cerebral',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 41 Giây',
			'des' : 'Gây (ATK x 0.5) sát thương một vùng lớn, tăng ATK đồng đội lên 4 cấp. Khi còn 50 giây, tăng ATK lên 4 cấp',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 50 giây, đồng đội tăng HP lên 6 cấp. Tăng ATK đồng đội lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt',
		},
		'pattern': 'Đang cập nhật',
		'img' : {
			'src' : 'sengoku.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_hp_up, hs_atk_up, target_nearby, ability_prevent_para'
	},

	'82' : {
		'title' : 'Kuzan V1 <span class="ht-none">Aokiji</span>',
		'color' : 'qck',
		'class' : 'shooter, striker',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây 2500 sát thương chuẩn một vùng lớn, 85% tỉ lệ khóa hành động kẻ địch trong 5 giây',
		},
		'hidden_skill' : {
			'des' : 'Khi CRIT, tăng ATK đồng đội lên 7 cấp, cộng dồn 2 lần.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (small range) → Normal Atk',
		'img' : {
			'src' : 'kuzan_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_bind_enemies, hs_atk_up, target_nearby'
	},

	'83' : {
		'title' : 'Shanks V1',
		'color' : 'psy',
		'class' : 'slasher, cerebral',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Cắt 23% HP toàn bộ địch. Nếu còn 30 giây, gây 2150 sát thương chuẩn và DEF giảm 7 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 30 giây PSYc tăng ATK lên 9 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Self Heal lv2 (range) → Strong Atk → Normal Atk',
		'img' : {
			'src' : 'shanks_v1.png'
		},
		'tags': 'skill_cut_hp, skill_fixed_dmg, skill_def_down, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'84' : {
		'title' : 'Rayleigh V1',
		'color' : 'int',
		'class' : 'slasher, fighter',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Giảm khóa chiêu đi 10 giây. Có 35% cơ hội khóa chiêu một vùng lớn địch trong 10 giây và giảm ATK xuống 9 cấp trong 19 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng đội lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% cơ hội tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heal lv1 (range) → Normal Atk → Heal lv2 (range)',
		'img' : {
			'src' : 'rayleigh_v1.png'
		},
		'tags': 'skill_silence_down, skill_silence_enemies, skill_atk_down, hs_speed_up, target_nearby, ability_prevent_silence'
	},

	'85' : {
		'title' : 'Luffy Gear 4 V1',
		'color' : 'psy',
		'class' : 'freespirit, fighter',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tấn công địch có HP cao nhất với sát thương bằng (ATK x 4), giảm ATK bản thân 10 cấp (15 giây) và DEF bản thân 3 cấp (15 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK bản thân lên 7 cấp. Tăng ATK FIGHTER/FREESPIRIT lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% cơ hội tránh tê liệt',
		},
		'pattern': 'Normal Atk → Strong Atk → Fullpower Atk',
		'img' : {
			'src' : 'g4_v1.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_down, skill_atk_down_self, skill_def_down, skill_def_down_self, hs_atk_up, hs_atk_up_self, hs_atk_up_class_fighter, hs_atk_up_class_fs, target_highest_atk, ability_prevent_para'
	},

	'86' : {
		'title' : 'Sabo V1',
		'color' : 'psy',
		'class' : 'freespirit, fighter',
		'stars' : 'legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Giảm DEF kẻ địch có HP cao nhất đi 4 cấp trong 15 giây, gây (ATK x 0.6) sát thương, tăng ATK FREESPIRIT lên 5 cấp (24 giây)',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED FREESPIRIT lên 6 cấp. Tăng ATK SHOOTER/FREESPIRIT lên 2 cấp nếu CRIT, cộng dồn 2 lần'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Khi HP nhỏ hoặc bằng 50%, hồi 200HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Heal lv1 (in small range) → Strong Atk',
		'img' : {
			'src' : 'sabo_v1.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, skill_atk_up, skill_atk_up_class_fs, hs_speed_up, hs_speed_up_class_fs, hs_atk_up, hs_atk_up_class_fs, hs_atk_up_class_shooter, target_highest_atk, ability_heal'
	},

	'87' : {
		'title' : 'Hancock V1',
		'color' : 'qck',
		'class' : 'freespirit, shooter',
		'stars' : 'legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây 1000 sát thương chuẩn lên 1 kẻ địch. Giảm DEF đi 4 cấp trong 20 giây một vùng lớn. Hồi HP đồng đội bằng (RCV x 1.25)',
		},
		'hidden_skill' : {
			'des' : 'Khi HP lớn hoặc bằng 50%, QCKc/PSYc tăng ATK lên 9 cấp. Khi HP nhỏ hơn 50%, QCKc/PSYc tăng RCV lên 9 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Atk → Heal lv2 (in range) → Normal Atk → Heal lv2 (in small range)',
		'img' : {
			'src' : 'hancock_v1.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_heal, hs_atk_up, hs_atk_up_color_qck, hs_atk_up_color_psy, hs_rcv_up, hs_rcv_up_color_qck, hs_rcv_up_color_psy, target_nearby, ability_prevent_silence'
	},

	'88' : {
		'title' : 'Fujitora V1',
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Cắt 59% HP toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'DRIVEN tăng HP lên 8 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP dưới 50%, hồi 200HP mỗi lượt',
		},
		'pattern': 'Normal Atk → Strong Atk → Full Power Atk',
		'img' : {
			'src' : 'fujitora_v1.png'
		},
		'tags': 'skill_cut_hp, hs_hp_up, hs_hp_up_class_driven, target_nearby, ability_heal'
	},

	'89' : {
		'title' : 'Snake-man V2',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (1.3 x ATK) sát thương cho 2 kẻ địch và tăng ATK STRc lên 5 cấp trong 20 giây. Khi trận đấu còn 30 giây, gây (2 x ATK) sát thương một vùng',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK của STRc lên 5 cấp và SPEED lên 1 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa skill',
		},
		'pattern': 'Normal Atk → Normal Atk → Strong Atk → Full Power Atk',
		'img' : {
			'src' : 'snakeman_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_color_str, hs_atk_up, hs_atk_up_color_str, hs_speed_up, hs_speed_up_color_str, target_nearby, ability_prevent_silence'
	},

	'90' : {
		'title' : 'Boa Hancock, Devoted to Strawhat Luffy',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Hồi (1.5 x RCV) HP cho một vùng, tăng ATK của STRc lên 3 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP FIGHTER lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Normal Attack → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'Boa_Hancock_Devoted_to_Strawhat_Luffy.png'
		},
	},

	'91' : {
		'title' : 'Monkey D. Luffy, Straw Hat Pirates: Outcome of a Hard-fought Battle',
		'color' : 'psy',
		'class' : 'fighter, freespirit',
		'stars' : 'Pirate Festival Gift',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 2000 sát thương chuẩn cho kẻ địch ở vùng trung tâm',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, Tăng CRIT PSYc lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'Monkey_D_Luffy_Straw_Hat_Pirates_Outcome_of_a_Hard_fought_Battle.png'
		},
	},

	'92' : {
		'title' : 'Kami Enel, Ruthless Thunder',
		'color' : 'int',
		'class' : 'driven, shooter',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (1.8 x ATK) sát thương một vùng rộng. Tăng DEF đồng minh lên 5 cấp trong 14 giây, tăng GUARD đồng đội lên 5 cấp trong 19 giây',
		},
		'hidden_skill' : {
			'des' : 'Nếu trên sân chỉ còn 6 hoặc ít hơn đồng đội trên sân, tăng HP INTc lên 5 cấp, tăng SPEED INTc lên 5 cấp, tăng DEF INTc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'Kami_Enel_Ruthless_Thunder.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, skill_guard_up, hs_hp_up, hs_hp_up_color_int, hs_speed_up, hs_speed_up_color_int, hs_def_up, hs_def_up_color_int, target_nearby',
	},

	'93' : {
		'title' : 'Trafalgar Law, True Desire of Life',
		'color' : 'str',
		'class' : 'slasher, freespirit',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây 2000 sát thương chuẩn cho 1 kẻ địch ở vùng trung tâm, và hồi 1700HP cho 1 đồng đội ở vùng trung tâm',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK FREESPIRIT lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Short Range Heal → Normal Attack',
		'img' : {
			'src' : 'Trafalgar_Law_True_Desire_of_Life.png'
		},
	},

	'94' : {
		'title' : 'Charlotte Katakuri, Haki that Conquers the Future',
		'color' : 'int',
		'class' : 'driven, fighter',
		'stars' : 'Legend',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây 2200 sát thương chuẩn cho toàn bộ địch. Giảm SPEED kẻ địch trong một vùng lớn 5 cấp trong 20 giây. Giảm tích nộ (CT charge) của kẻ địch thuộc FREESPIRIT đi 5 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED INTc lên 5 cấp. Giảm DEF đi 4 cấp và kéo dài thời gian tích nộ lên 5 cấp cho kẻ địch PSYc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh tê liệt (paralysis)',
		},
		'pattern': 'Normal Attack → Lv.2 Self Heal → Strong Attack → Normal Attack',
		'img' : {
			'src' : 'Charlotte_Katakuri_Haki_that_Conquers_the_Future.png'
		},
		'tags': 'skill_speed_down, skill_ct_down, skill_ct_down_class_fs, hs_speed_up, hs_speed_up_color_int, target_nearby, ability_prevent_para, skill_fixed_dmg, hs_def_down, hs_def_down_color_psy, hs_ct_down, hs_ct_down_color_psy'
	},

	'95' : {
		'title' : 'Blackbeard V2',
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 20 Giây',
			'des' : 'Gây (2 x ATK) sát thương một vùng rộng và tăng ATK bản thân lên 10 cấp và tốc độc tích nộ bản thân lên 3 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP INTc lên 5 cấp. Khi máu bằng hoặc nhỏ hơn 60%, Tăng tích nộ (CT charge) bản thân lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khí máu dưới 50%, hồi 150HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'blackbeard_v2.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_self, skill_ct_up, skill_ct_up_self, hs_hp_up, hs_hp_up_color_int, hs_ct_up, hs_ct_up_self, target_nearby, ability_heal'
	},

	'96' : {
		'title' : 'Sabo V4',
		'color' : 'str',
		'class' : 'fighter, freespirit',
		'stars' : 'Legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tăng ATK FREESPIRIT lên 5 cấp trong 25 giây, tăng SPEED FIGHTER lên 6 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STRc lên 5 cấp mỗi khi STRc CRIT, cộng dồn 2 lần.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% cơ hội tránh khóa skill',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Small Range Heal → Normal Attack',
		'img' : {
			'src' : 'sabo_v4.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_class_fs, skill_speed_up, skill_speed_up_class_fighter, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'97' : {
		'title' : 'Onami, Charming Female Ninja',
		'color' : 'qck',
		'class' : 'striker, cerebral',
		'stars' : 'Legend',
		'type' : 'Hồi Phục',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Khi HP lớn hoặc bằng 70%, giảm DEF toàn bộ địch đi 4 cấp trong 19 giây. CRIT và ATK của đồng minh tăng 6 cấp (19 giây). Nếu HP nhỏ hơn 70%, hồi (2.5 x RCV) HP cho đồng minh và giảm def toàn bộ địch đi 5 cấp trong 19 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh lên 5 cấp. Tăng tốc độ tích nộ của đồng minh lên 1 cấp. Tăng chính xác đòn đánh thường của đồng minh lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 250HP mỗi lượt. Giảm 30% sát thương từ kẻ địch STRc',
		},
		'pattern': 'Normal Attack → Lv.1 Small Range Heal → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'nami_v2.png'
		},
		'tags': 'skill_def_down, skill_crit_up, skill_atk_up, skill_heal, hs_hp_up, hs_ct_up, hs_miss_up, target_nearby, ability_heal, ability_dmg_reduce'
	},

	'98' : {
		'title' : 'Hody Jones, False Crusader Rampaging Recklessly',
		'color' : 'int',
		'class' : 'powerhouse, shooter',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây 1700 sát thương chuẩn cho kẻ địch có DEF cao nhất. Tăng DEF lên 6 cấp cho POWERHOUSE.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP POWERHOUSE lên 6 cấp, tăng CT POWERHOUSE lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao nhất',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack',
		'img' : {
			'src' : 'hody.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_up, skill_def_up_class_ph, hs_hp_up, hs_hp_up_class_ph, hs_ct_up, hs_crit_up_class_ph, target_highest_speed, ability_prevent_silence'
	},

	'99' : {
		'title' : 'Shirahoshi, Promised Reunion',
		'color' : 'psy',
		'class' : 'striker',
		'stars' : 'Legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Hồi HP một vùng lớn đồng đội bằng (2.8 x RCV) HP. Tăng khả năng đánh lùi của đồng đội lên 5 cấp. Tăng ATK và DEF cho PSYc lên 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Khi HP nhỏ hoặc bằng 50%, tăng RCV bản thân lên 29 cấp. Tăng CRIT PSYc lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% cơ hội tránh khóa chiêu.',
		},
		'pattern': 'Normal Attack → Lv.3 Small Range Heal → Lv.1 self heal → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'shirahoshi.png'
		},
		'tags': 'skill_heal, skill_blow_up, hs_rcv_up, hs_rcv_up_self, target_nearby, ability_prevent_silence, skill_atk_up, skill_atk_up_color_psy, skill_def_up, skill_def_up_color_psy, hs_crit_up, hs_crit_up_color_psy'
	},

	'100' : {
		'title' : 'Jack, Eleph-Eleph Fruit: Ancient Model User',
		'color' : 'str',
		'class' : 'striker, fighter',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Tăng DEF đồng đội vùng lớn xung quanh lên 3 cấp (20 giây). Cắt 14% HP kẻ địch trong một vùng lớn, cắt 23% nếu trận đấu còn 70 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng đội lên 5 cấp. Tăng DEF đồng đội lên 1 cấp trong 30 giây đầu.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP nhỏ hoặc bằng 50%, hồi 100HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 self heal',
		'img' : {
			'src' : 'jack.png'
		},
		'tags': 'skill_def_up, skill_cut_hp, hs_hp_up, hs_def_up, target_nearby, ability_heal'
	},

	'101' : {
		'title' : 'Dark King Rayleigh, Teaching a New Era',
		'color' : 'psy',
		'class' : 'cerebral, fighter',
		'stars' : 'Legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 1000 sát thương chuẩn cho toàn bộ kẻ địch. Giảm DEF kẻ địch có nhiều máu nhất đi 5 cấp, tăng ATK đồng đội có ATK cao nhất lên 7 cấp trong 25 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK FIGHTER/CEREBRAL lên 5 cấp và DEF FIGHTER/CEREBRAL lên 1 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao nhất',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Lv.3 heal small Range → Lv.1 self heal → Lv.2 heal',
		'img' : {
			'src' : 'rayleigh_v3.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_atk_up, hs_atk_up, hs_atk_up_class_fighter, hs_atk_up_class_cerebral, hs_def_up, hs_def_up_class_fighter, hs_def_up_class_cerebral, target_highest_atk, ability_prevent_silence',
	},

	'102' : {
		'title' : 'Monkey D. Luffy, Celebrate 6th Anniversary Cruise',
		'color' : 'dex',
		'class' : 'freespirit, fighter',
		'stars' : 'TM Character',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (0.9 x ATK) sát thương lên những kẻ địch ở vùng trung tâm và tăng SPEED của DEXc lên 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK FREESPIRIT lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'dex_tm_luffy.png'
		},
	},

	'103' : {
		'title' : 'Carrot, Awakening Sulong',
		'color' : 'str',
		'class' : 'fighter, slasher',
		'stars' : 'Kizuna',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Giảm DEF vùng lớn kẻ địch đi 6 cấp trong 20 giây. Giảm SPEED DEXc trong 1 vùng lớn trước mặt đi 7 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STRc lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao',
			'extra_ability' : '30% tránh tê liệt (paralysis)',
		},
		'pattern': 'Normal Attack → Lv.2 Self Heal → Strong Attack → Normal Attack',
		'img' : {
			'src' : 'str_carrot_kizuna.png'
		},
	},

	'104' : {
		'title' : 'Eustass Kid, Magnetic Captain Challenging the Dragon',
		'color' : 'dex',
		'class' : 'driven, striker',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Tăng DEF tất cả đồng minh lên 3 cấp trong 25 giây và gây (2 x ATK) sát thương một vùng lớn.',
		},
		'hidden_skill' : {
			'des' : 'Tăng DEF của DEXc lên 2 cấp, HP của DEXc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '50% cơ hội chặn sát thương theo thời gian.',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'dex_kid_legend.png'
		},
		'tags': 'skill_def_up, skill_deal_dmg, hs_def_up, hs_def_up_color_dex, hs_hp_up, hs_hp_up_color_dex, target_highest_atk, ability_prevent_stack_dmg'
	},

	'105' : {
		'title' : 'Magician Basil Hawkins, Follower of the Dragon',
		'color' : 'dex',
		'class' : 'cerebral, slasher',
		'stars' : 'legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tăng DEF bản thân lên 5 cấp, ATK bản thân lên 6 cấp và bật khóa mục tiêu trong 20 giây. Nếu HP dưới 40%, gây (1 x ATK) sát thương cho một vùng rộng. Nếu HP dưới 50%, gây (1.8 x ATK) sát thương',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED bản thân lên 5 cấp nếu máu dưới 50%. Tăng tỉ lệ xuất hiện khiên và CRIT của đồng minh DEXc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 100 HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Lv.1 Self Heal → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'dex_hawkins_legend.png'
		},
		'tags': 'skill_def_up, skill_def_up_self, skill_atk_up, skill_atk_up_self, skill_lock_target, skill_deal_dmg, hs_speed_up, hs_speed_up_self, hs_guard_up, hs_guard_up_color_dex, hs_crit_up, hs_crit_up_color_dex, target_nearby, ability_heal'
	},

	'106' : {
		'title' : 'Mr. 0, Uncowardly Duel',
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'raid',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Giảm sự chính xác của toàn bộ kẻ địch đi 5 cấp trong 20 giây. Giảm ATK FREESPIRIT đi 7 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP DRIVEN lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 100 HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Lv.2 Self Heal → Strong Attack → Normal Attack',
		'img' : {
			'src' : 'mr0_int_raid.png'
		},
	},

	'107' : {
		'title' : 'O-Soba Mask, Mysterious Germa 66',
		'color' : 'dex',
		'class' : 'powerhouse, freespirit',
		'stars' : 'raid',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (1.3 x ATK) sát thương cho 1 kẻ địch, tăng SPEED DEXc lên 5 cấp trong 20 giây và DEF DEXc lên 6 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP DEXc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Small Range Heal → Normal Attack',
		'img' : {
			'src' : 'osoba_dex_raid.png'
		},
	},

	'108' : {
		'title' : 'Red Flag X Drake, Former Drake Pirate',
		'color' : 'dex',
		'class' : 'powerhouse, slasher',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (1.25 x ATK) cho kẻ địch ở vùng trung tâm phía trước, tăng ATK DEXc lên 3 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 50 giây, tăng ATK DEXc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'xdrake_dex_rr.png'
		},
	},

	'109' : {
		'title' : 'Page One, Tobiroppo of the Beasts Pirates',
		'color' : 'dex',
		'class' : 'powerhouse, slasher',
		'stars' : 'Rare Recruit',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Giảm tích nộ (CT) của kẻ địch có DEF cao nhất đi 20%. Nếu có nhiều hơn 5 đồng mình ở trên sân, tăng SPEED DEXc lên 4 cấp trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 50 giây đầu, tăng HP DEXc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Small Range Heal → Normal Attack',
		'img' : {
			'src' : 'page_one_dex_rr.png'
		},
	},

	'110' : {
		'title' : 'Sanji, Burning Flames of Anger',
		'color' : 'str',
		'class' : 'powerhouse, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây (2 x ATK) sát thương cho 2 kẻ địch ở gần, tăng ATK STRc lên 5 cấp trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STRc lên 5 cấp, tăng SPEED STRc lên 5 cấp. Trong 30 giây đầu tăng tốc độ tích nộ STRc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Short Range Heal → Normal Attack',
		'img' : {
			'src' : 'sanji_str_rr_pf.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_color_str, hs_atk_up, hs_atk_up_color_str, hs_speed_up, hs_speed_up_color_str, hs_ct_up, hs_ct_up_color_str'
	},

	'111' : {
		'title' : 'O-Tama, Bonding with Komachiyo',
		'color' : 'str',
		'class' : 'freespirit, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : '?',
		'skill' : {
			'note' : 'lv10 - 17 Giây',
			'des' : 'Hồi (1.8 x RCV) HP cho đồng minh một vùng lớn và (2.5 x RCV) HP cho đồng mình có HP thấp nhất.',
		},
		'hidden_skill' : {
			'des' : 'Tăng CRIT FIGHTER và FREESPIRIT lên 5 cấp. Trong 30 giây đầu, tăng tốc độ tích nộ FIGHTER/FREESPIRIT lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Normal Attack → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'otama_str_lrr_pf.png'
		},
		'tags': 'skill_heal, hs_ct_up, hs_ct_up_class_fs, hs_ct_up_class_fighter, hs_crit_up, hs_crit_up_class_fs, hs_crit_up_class_fighter'
	},

	'112' : {
		'title' : 'Luffy & Hancock, Joint Front for Training',
		'color' : 'dual',
		'class' : 'freespirit, fighter, shooter',
		'stars' : 'Kizuna',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (2 x ATK) sát thương cho 2 kẻ địch, tăng DEF đồng đội lên 4 cấp (25 giây).',
		},
		'hidden_skill' : {
			'des' : 'Khi còn ít hơn 4 đồng đội, tăng khiên (guard) đồng đội lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.1 heal allies in short range',
		'img' : {
			'src' : 'luffy_boa_kizuna.png'
		},
	},

	'113' : {
		'title' : 'White Chase Smoker, Marine Who Carries Out His Own Justice',
		'color' : 'qck',
		'class' : 'striker, driven',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 42 Giây',
			'des' : 'Gây (2.5 x ATK) sát thương một vùng lớn phía trước, 100% tê liệt 2 kẻ địch trong 10 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP QCKc lên 5 cấp. Khi còn dưới 50% HP, giảm độ chính xác đòn đánh kẻ địch đi 6 cấp (missing).'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : '70% tránh tê liệt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'smoker_qck_legend.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hs_hp_up_color_qck, hs_hp_up, hidden_skill_accuracy_enemy_down, target_highest_atk, ability_prevent_para'
	},

	'114' : {
		'title' : 'Sugar, Queen of the Toys',
		'color' : 'qck',
		'class' : 'cerebral, driven',
		'stars' : 'legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Giảm DEF toàn bộ kẻ địch đi 3 cấp trong 18 giây. Giảm ATK và SPEED 2 kẻ địch STRc đi 9 cấp trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 20 giây đầu, tăng tốc độ tích nộ của QCKc lên 5 cấp và giảm tốc độ tích nộ của 2 kẻ địch STRc đi 8 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Hồi 250HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Lv.1 Self Heal → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'sugar_qck_legend.png'
		},
		'tags': 'skill_def_down, skill_atk_down, skill_atk_down_color_str, skill_speed_down, skill_speed_down_color_str, hs_ct_up, hs_ct_up_color_qck, hs_ct_down, hs_ct_down_color_str, target_nearby, ability_heal'
	},

	'115' : {
		'title' : 'Master Caesar, Gas-Gas Fruit User',
		'color' : 'qck',
		'class' : 'cerebral, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Áp dụng tấn công liên hoàn lên 2 cấp cho STRc và INTc trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Nếu HP dưới 70%, tăng tốc tích nộ tất cả đồng mình lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 Short Range Heal → Normal Attack',
		'img' : {
			'src' : 'qck_caesar_rr.png'
		},
		'tags': 'skill_continuous_dmg_up, skill_continuous_dmg_up_color_str, skill_continuous_dmg_up_color_int, hs_ct_up, target_nearby'
	},

	'116' : {
		'title' : 'Big Eater Jewelry Bonney, Hidden Worst Generation',
		'color' : 'qck',
		'class' : 'freespirit, fighter',
		'stars' : 'Rare Recruit',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Hồi (1.2 x RCV) cho đồng minh một vùng xung quanh và tăng ATK của FIGHTER/FREESPIRIT lên 3 cấp trong 20 giây, DEF của FIGHTER/FREESPIRIT lên 2 cấp trong 16 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP của FIGHTER/FREESPIRIT lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Lv.1 Short Range Heal',
		'img' : {
			'src' : 'qck_bonney_rr_ver_2.png'
		},
		'tags': 'skill_heal, skill_atk_up, skill_atk_up_class_fighter, skill_atk_up_class_fs, skill_def_up, skill_def_up_class_fighter, skill_def_up_class_fs, hs_hp_up, hs_hp_up_class_fighter, hs_hp_up_class_fs, target_nearby'
	},

	'117' : {
		'title' : 'Emporio Ivankov, Miracle Person Engineer',
		'color' : 'qck',
		'class' : 'freespirit, fighter',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (0.9 x ATK) sát thương một vùng rộng và tăng SPEED của FIGHTER/FREESPIRIT lên 5 cấp trong 16 giây.',
		},
		'hidden_skill' : {
			'des' : 'Nếu HP dưới 50%, tăng ATK bản thân lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_ivankov_rr_ver_2.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_up, skill_speed_up_class_fighter, skill_speed_up_class_fs, hs_atk_up, hs_atk_up_self, target_nearby'
	},

	'118' : {
		'title' : 'Vinsmoke Reiju, True Force of the Science Military Force',
		'color' : 'int',
		'class' : 'powerhouse, fighter',
		'stars' : 'TM',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (1 x ATK) sát thương một vùng rộng, 100% làm tê liệt một kẻ địch trong 32 giây.',
		},
		'hidden_skill' : {
			'des' : 'Khi còn 70 giây, INTc tăng SPEED lên 5 cấp và tăng ATK lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_reiju_tm.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hs_speed_up, hs_speed_up_color_int, hs_atk_up, hs_atk_up_color_int, target_nearby'
	},

	'119' : {
		'title' : "Blackbeard, Hell's Darkness",
		'color' : 'qck',
		'class' : 'powerhouse, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 2400 sát thương chuẩn cho kẻ địch có ATK, 60% cơ hội khóa chiêu trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK DRIVEN lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_blackbeard_pf.png'
		},
		'tags': 'skill_fixed_dmg, skill_silence_enemies, hs_atk_up, hs_atk_up_class_driven, target_highest_atk'
	},

	'120' : {
		'title' : "Stussy, Secret Justice from the Darkness",
		'color' : 'qck',
		'class' : 'shooter, freespirit',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (3 x ATK) sát thương cho 1 kẻ địch ở trong tầm, tăng ATK của QCKc lên 4 cấp trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 15 giây đầu, tăng SPEED QCKc lên 5 cấp, DEF QCKc lên 4 cấp, ATK QCKc lên 4 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_stussy_pf.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_color_qck, hs_speed_up, hs_speed_up_color_qck, hs_def_up, hs_def_up_color_qck, hs_atk_up, hs_atk_up_color_qck, target_nearby'
	},

	'121' : {
		'title' : "Nekomamushi, Misunderstanding King of Night",
		'color' : 'qck',
		'class' : 'striker, cerebral',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Cắt 30% HP một vùng rộng trước mặt, tăng DEF STRIKER/CEREBRAL lên 3 cấp trong 10 giây, tăng ATK STRIKER/CEREBRAL lên 5 cấp trong 49 giây, tăng DEF bản thân lên 10 cấp trong 10 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng DEF STRIKER/CEREBRAL lên 4 cấp. Khi còn 60 giây, tăng ATK STRIKER/CEREBRAL lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'qck_nekomamushi_pf.png'
		},
		'tags': 'skill_ct_up, skill_def_up, skill_def_up_self, skill_def_up_class_striker, skill_def_up_class_cerebral, skill_atk_up, skill_atk_up_class_striker, skill_atk_up_class_cerebral, hs_def_up, hs_def_up_class_striker, hs_def_up_class_cerebral, hs_atk_up, hs_atk_up_class_striker, hs_atk_up_class_cerebral, target_nearby'
	},

	'122' : {
		'title' : "Whitebeard, Unchallenged Pinnacle for the Throne",
		'color' : 'qck',
		'class' : 'striker, fighter',
		'stars' : 'Pirate Festival LRR',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Giảm DEF toàn bộ kẻ địch đi 5 cấp trong 15 giây và gây (2 x ATK) sát thương cho một vùng rộng. 80% cơ hội khóa chiêu 2 kẻ địch có class POWERHOUSE trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 50 giây đầu, tăng HP QCKc lên 5 cấp. Khi còn 50 giây, tăng ATK bản thân lên 5 cấp, tăng tốc tích nộ lên 5 cấp, tăng SPEED lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP thấp',
			'extra_ability' : '80% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_whitebread_pf.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, skill_silence_enemies, hs_hp_up, hs_hp_up_color_qck, hs_atk_up, hs_atk_up_self, hs_ct_up, hs_ct_up_self, hs_speed_up, hs_speed_up_self, target_low_hp, ability_prevent_silence'
	},

	'123' : {
		'title' : "Kaido, Animal Kingdom Pirates",
		'color' : 'str',
		'class' : 'striker, driven',
		'stars' : 'Kizuna',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Gây (1.5 x ATK) sát thương một vùng lớn, giảm DEF kẻ địch có DEF cao nhất đi 6 cấp, giảm ATK kẻ địch có ATK cao nhất đi 6 cấp. Hồi phục (2 x RCV) HP cho bản thân và 100% tự khóa chiêu bản thân trong 50 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP STRIKER lên 6 cấp. Trong 30 giây đầu, Tăng ATK STRIKER lên 5 cấp. Khi còn 50 giây, tăng ATK và SPEED bản thân lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_kizuna_kaido.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_atk_down, skill_heal, skill_heal_self, skill_silence_self, hs_hp_up, hs_hp_up_class_striker, hs_atk_up, hs_atk_up_class_striker, hs_atk_up_self, hs_speed_up_self, hs_speed_up, target_nearby'
	},

	'124' : {
		'title' : "Trafalgar Law, Alliance to Liberate the Land of Wano",
		'color' : 'psy',
		'class' : 'freespirit, slasher',
		'stars' : 'legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây 2200 sát thương chuẩn một vùng lớn, giảm khóa chiêu, trói và tê liệt đi 22 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc tích nộ đồng minh PSYc lên 6 cấp. Trong 40 giây đầu, giảm tích nộ, tỉ lệ bật khiên và SPEED của kẻ địch có class DRIVEN/POWERHOUSE đi 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Khi HP nhỏ hoặc bằng 50%, hồi 250HP mỗi lượt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_law_v3_legend.png'
		},
		'tags': 'skill_fixed_dmg, skill_silence_down, skill_para_down, skill_bind_down, hs_ct_up, hs_ct_up_color_psy, hs_ct_down, hs_ct_down_class_driven, hs_ct_down_class_ph, hs_guard_down, hs_guard_down_class_driven, hs_guard_down_class_ph, hs_speed_down, hs_speed_down_class_driven, hidden_skill_speed_down_class_ph, target_nearby, ability_heal'
	},

	'125' : {
		'title' : "Kami Enel, The God Seeking his Dream World",
		'color' : 'psy',
		'class' : 'shooter, driven',
		'stars' : 'Pirate Festival Character',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 1400 sát thương chuẩn cho toàn bộ địch, 30% làm tê liệt trong 20 giây, tăng ATK PSYc lên 4 cấp trong 19 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, tăng ATK PSYc lên 5 cấp, SPEED PSYc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao',
			'extra_ability' : 'Miễn nhiễm tê liệt',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_enel_pf.png'
		},
		'tags': 'skill_fixed_dmg, skill_para_enemies, skill_atk_up, skill_atk_up_color_psy, hs_atk_up, hs_atk_up_psy, hs_speed_up, hs_speed_up_color_qsy, target_highest_speed, ability_prevent_para'
	},

	'126' : {
		'title' : "Boa Hancock, Vacation on the Evening Beach",
		'color' : 'psy',
		'class' : 'shooter, freespirit',
		'stars' : 'Legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây 4000 sát thương chuẩn cho kẻ địch có HP thấp, giảm ATK một vùng lớn đi 11 cấp trong 15 giây và tăng ATK PSYc lên 6 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK PSYc lên 5 cấp. Nếu HP dưới 50%, tăng DEF PSYc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '70% tránh khóa chiêu',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Strong Attack → Lv.2 Small Range Heal',
		'img' : {
			'src' : 'psy_boa_legend_v3_summer.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_down, skill_atk_up, skill_atk_up_color_psy, hs_atk_up, hs_atk_up_color_psy, hs_def_up, hs_def_up__color_psy, target_nearby, ability_prevent_silence'
	},

	'127' : {
		'title' : "Nico Robin, Vacation on the Moonlit Beach",
		'color' : 'psy',
		'class' : 'fighter, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Giảm DEF một vùng lớn đi 3 cấp trong 20 giây và giảm ATK DRIVEN đi 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED PSYc lên 5 cấp, tăng tốc độ tích nộ PSYc lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.1 Self Heal → Normal Attack → Lv.2 Self Heal',
		'img' : {
			'src' : 'psy_nico_robin_summer_rr.png'
		},
		'tags': 'skill_def_down, skill_atk_down, skill_atk_down_class_driven, hs_speed_up, hs_speed_up_color_qsy, hs_ct_up, hs_ct_up_color_psy, target_nearby'
	},

	'128' : {
		'title' : "Rebecca, Royal Family Vacation",
		'color' : 'psy',
		'class' : 'freespirit, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Tăng CRIT tất cả đồng minh lên 4 cấp trong 25 giây và tăng ATK FREESPIRIT lên 4 cấp trong 25 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK PSYc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.1 Small Range Heal → Strong Attack',
		'img' : {
			'src' : 'rebecca_psy_rr_summer_2020.png'
		},
		'tags': 'skill_crit_up, skill_atk_up, skill_atk_up_class_fs, hs_atk_up, hs_atk_up_color_psy, target_nearby'
	},

	'129' : {
		'title' : "Violet, Royal Family Vacation",
		'color' : 'psy',
		'class' : 'freespirit, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Hồi HP bằng với (2.5 x RCV) một vùng lớn và giảm tê liệt cho đồng minh FREESPIRIT đi 6 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP PSYc lên 5 cấp, DEF PSYc lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Không có',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Normal Attack → Lv.2 Short Range Heal',
		'img' : {
			'src' : 'violet_psy_rr_summer_2020.png'
		},
		'tags': 'skill_heal, skill_para_down, hs_hp_up, hs_hp_up_color_psy, hs_def_up, hs_def_up__color_psy, target_nearby'
	},

	'130' : {
		'title' : "Calgara & Noland, Bell Ring Promise",
		'color' : 'psy',
		'class' : 'striker, slasher',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Tăng ATK bản thân lên 7 cấp trong 35 giây, tăng SPEED toàn bộ đồng minh lên 7 cấp trong 35 giây, gây (2.5 x ATK) cho một kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng ATK bản thân lên 5 cấp. Khi còn dưới 40 giây, tăng ATK bản thân, tốc độ tích nộ toàn bộ đồng minh và SPEED toàn bộ đồng minh lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Miễn nhiễm khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'calgara_noland_pf.png'
		},
		'tags': 'skill_atk_up, skill_atk_up_self, skill_speed_up, skill_deal_dmg, hs_atk_up, hs_atk_up_self, hs_ct_up, hs_speed_up, target_nearby, ability_prevent_bind'
	},

	'131' : {
		'title' : "Conis, Young Girl Fighting Kami",
		'color' : 'int',
		'class' : 'freespirit, shooter',
		'stars' : 'Pirate Festival',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Giảm DEF kẻ địch đi 2 cấp trong 23 giây, giảm SPEED và khiên của PSYc đi 6 cấp trong 23 giây. 100% cơ hội tê liệt 2 kẻ địch PSYc trong 20 giây và 100% khóa hành động 1 kẻ đich PSYc trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, giảm tốc độ tích nộ của kẻ địch PSYc đi 6 cấp và tăng DEF cho INTc lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : 'Miễn nhiễm khóa chiêu.',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'conis_pf_int.png'
		},
		'tags': 'skill_def_down, skill_speed_down, skill_speed_down_color_psy, skill_guard_down, skill_guard_down_color_psy, skill_para_enemies, skill_para_enemies_color_psy, skill_bind_enemies, skill_bind_enemies_color_psy, hs_ct_down, hs_ct_down_color_psy, hs_def_up, hs_def_up__color_int, target_nearby, ability_prevent_silence'
	},

	'132' : {
		'title' : "Kaku, Cipher Pol 'Aegis' Zero",
		'color' : 'str',
		'class' : 'slasher, powerhouse',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Giảm DEF kẻ địch DEXc đi 5 cấp trong 20 giây, gây (2.2 x ATK) sát thương một vùng rộng.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP STRc lên 5 cấp. Trong 40 giây đầu, giảm tốc độ tích nộ của kẻ địch DEXc đi 6 cấp và DEF toàn bộ địch đi 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần',
			'extra_ability' : '50% tránh tê liệt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'kaku_pf_str.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, hs_hp_up, hs_hp_up_color_str, hs_ct_down, hs_ct_down_color_dex, hs_def_down, target_nearby, ability_prevent_para'
	},

	'133' : {
		'title' : "Luffy & Sanji, Faithful Friends at the Battlefront",
		'color' : 'dual',
		'class' : 'freespirit, fighter',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (3.5 x ATK) cho 2 kẻ địch. Tăng ATK toàn bộ đồng minh lên 5 cấp và SPEED toàn bộ đồng minh lên 7 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh lên 6 cấp và SPEED đồng minh lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP cao',
			'extra_ability' : 'Miễn nhiễm khóa chiêu.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'luffy_sanji_legend_str_psy.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_upm skill_speed_up, hs_atk_up, hs_speed_up, target_highest_hp, ability_prevent_silence'
	},

	'134' : {
		'title' : "Nami, Welcoming Hug",
		'color' : 'psy',
		'class' : 'cerebral, striker',
		'stars' : 'Rare Recruit',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 1300 sát thương chuẩn toàn bộ địch. Hồi (2 x RCV) HP cho đồng minh trong một vùng nhỏ.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng mình lên 4 cấp và SPEED đồng minh lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP thấp',
			'extra_ability' : 'Không có.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'nami_int_wci_welcoming_hug.png'
		},
		'tags': 'skill_fixed_dmg, skill_heal, hs_hp_up, hs_speed_up, target_low_hp'
	},

	'135' : {
		'title' : "Capone Gang Bege, Assassination Plan at the Tea Party",
		'color' : 'str',
		'class' : 'driven, shooter',
		'stars' : 'Rare Recruit',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (1.5 x ATK) sát thương một vùng rộng và tăng DEF STRc lên 2 cấp.',		
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ khiên đồng minh lên 5 cấp và DEF đồng minh lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP thấp',
			'extra_ability' : 'Không có.',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → STRcong Attack → Full Power Attack',
		'img' : {
			'src' : 'bege_str_rr_Assassination_Plan.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, skill_def_up_color_str, hs_guard_up, hs_def_up, target_low_hp'
	},

	'136' : {
		'title' : "Germa 66, Retaliation of the Science Military Force",
		'color' : 'psy',
		'class' : 'driven, powerhouse',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 2500 sát thương chuẩn cho 3 kẻ địch và 100% làm tê liệt 2 kẻ địch INTc trong 16 giây.',		
		},
		'hidden_skill' : {
			'des' : 'Tăng DEF PSYc lên 2 cấp, HP PSYc lên 5 cấp và giảm DEF kẻ địch INTc đi 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao',
			'extra_ability' : 'Miễn nhiễm khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'germa_66_crew_legend_psy.png'
		},
		'tags': 'skill_fixed_dmg, skill_para_enemies, skill_para_enemies_color_int, hs_def_up, hs_def_up_color_psy, hs_hp_up, hs_hp_up_color_psy, hs_def_down, hs_def_down_color_inrt, target_highest_speed, ability_prevent_bind'
	},

	'137' : {
		'title' : "Sweet 3 Commanders, Big Mom's Strong Children",
		'color' : 'str',
		'class' : 'slasher, powerhouse',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (2 x ATK) sát thương một vùng lớn và tăng tốc độ tích nộ STRc lên 15%.',		
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK STRc lên 6 cấp, HP STRc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm sát thương theo thời gian.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '3_commanders_big_mom_str_legend.png'
		},
		'tags': 'skill_deal_dmg, skill_ct_up, skill_ct_up_color_str, hs_atk_up, hs_atk_up_color_str, hs_hp_up, hs_hp_up_color_str, target_nearby, ability_prevent_stack_dmg'
	},

	'138' : {
		'title' : "Soul King Brook, The Musician Fighting with the Soul",
		'color' : 'psy',
		'class' : 'slasher, freespirit',
		'stars' : 'raid',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (1.5 x ATK) sát thương một vùng rộng. Giảm thời gian khóa chiêu và khóa hành động của đồng minh PSYc đi 24 giây.',		
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng ATK PSYc lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao.',
			'extra_ability' : 'Hồi 150HP mỗi lượt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_soul_king_wci_raid_The_Musician_Fighting.png'
		},
		'tags': 'skill_deal_dmg, skill_silence_down, skill_bind_down, skill_silence_down_color_psy, skill_bind_down_color_psy, hs_atk_up, hs_atk_up_color_psy, target_highest_speed, ability_heal'
	},

	'139' : {
		'title' : "Perospero, Path-Blocking Candy",
		'color' : 'str',
		'class' : 'driven, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (1.8 x ATK) sát thương một vùng rộng. Giảm ATK địch đi 6 cấp và DEF địch đi 2 cấp.',		
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh lên 5 cấp và tốc độ tích nộ lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP thấp.',
			'extra_ability' : 'Không có.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'str_perospero_Path_Blocking_Candy.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_down, skill_def_down, hs_atk_up, hs_ct_up, target_low_hp'
	},

	'140' : {
		'title' : "Usoland, Sniper's Flower Arangement",
		'color' : 'str',
		'class' : 'freespirit, shooter',
		'stars' : 'Pirate Festival Gift',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Gây (1.8 x ATK) sát thương một vùng rộng. Giảm độ chính xác và tỉ lệ xuất hiện khiên của kẻ địch DEXc đi 5 cấp.',		
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK và SPEED của SHOOTER/FREESPIRIT lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '70% tránh khóa chiêu.',
		},
		'pattern': 'Normal Attack → Lv.2 Medium Range Heal → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'str_usoland_Snipers_Flower_Arangement.png'
		},
		'tags': 'skill_deal_dmg, skill_accurate_down, skill_guard_down, hs_atk_up, hs_atk_up_class_shooter, hs_atk_up_class_fs, hs_speed_up, hs_speed_up_class_shooter, hs_speed_up_class_fs, target_nearby, ability_prevent_silence'
	},

	'141' : {
		'title' : "Franky, Unprecedented Model Change",
		'color' : 'dex',
		'class' : 'freespirit, powerhouse',
		'stars' : 'Pirate Festival',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Khiến một vùng lớn kẻ địch mất máu mỗi khi tấn công trong 44 giây (cấp 3). Giảm DEF QCKc đi 2 cấp trong 24 giây và SPEED QCKc giảm đi 7 cấp trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK DEXc lên 5 cấp. Tăng SPEED DEXc lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao.',
			'extra_ability' : 'Miễn nhiễm khóa chiêu.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'dex_pvp_franky_lrr.png'
		},
		'tags': 'skill_continuous_dmg_up, skill_def_down, skill_def_down_color_qck, skill_speed_down, skill_speed_down_color_qck, hs_atk_up, hs_atk_up_color_dex, hs_speed_up, hs_speed_up_color_dex, target_highest_speed, ability_prevent_silence'
	},

	'142' : {
		'title' : "Leo & Wicca & Cub",
		'color' : 'qck',
		'class' : 'freespirit, striker',
		'stars' : 'Pirate Festival',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : '60% cơ hội gây tê liệt toàn bộ kẻ đich trong 23 giây, giảm DEF kẻ địch có DEF cao nhất đi 10 cấp trong 29 giây, tăng ATK đồng minh có ATK cao nhất lên 7 cấp trong 29 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP và CRIT của QCKc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao.',
			'extra_ability' : 'Miễn nhiễm khóa chiêu.',
		},
		'pattern': 'Normal Attack → Lv.2 heal surrounding allies (medium range) → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_leo_wicca_cub_pvp.png'
		},
		'tags': 'skill_para_enemies, skill_def_down, skill_atk_up, hs_hp_up, hs_hp_up_color_qck, hs_crit_up, hs_crit_up_color_qck, target_highest_atk, ability_prevent_silence'
	},

	'143' : {
		'title' : "Sakazuki & Borsalino, Highest Strength of the Marines",
		'color' : 'dual',
		'class' : 'driven, slasher',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Gây (2 x ATK) sát thương một vùng rộng trước mặt, tăng ATK SLASHER/DRIVEN lên 5 cấp trong 24 giây và tăng SPEED SLASHER/DRIVEN lên 7 cấp trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 5 cấp và ATK lên 5 cấp cho SLASHER/DRIVEN.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'dual_sakazuki_kizaru_akainu_pvp.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_atk_up_class_slasher, skill_atk_up_class_driven, skill_speed_up, hs_hp_up, hs_atk_up, target_nearby, ability_prevent_bind'
	},

	'144' : {
		'title' : "Mihawk: Deep Night Dark Road, Happy Scary Halloween",
		'color' : 'int',
		'class' : 'cerebral, slasher',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 45 Giây',
			'des' : 'Tăng ATK bản thân lên 5 cấp trong 10 giây, gây (3 x ATK) sát thương một vùng lớn phía trước.',
		},
		'hidden_skill' : {
			'des' : 'Khi CRIT, giảm DEF toàn bộ địch đi 2 cấp (Cộng dồn 4 lần).'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao.',
			'extra_ability' : 'Miễn nhiễm tê liệt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'halloween_mihawk_int.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_def_down, target_highest_atk, ability_prevent_para'
	},

	'145' : {
		'title' : "Law: Road Midnight Street, Happy Scary Halloween",
		'color' : 'int',
		'class' : 'cerebral, slasher',
		'stars' : 'Legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : '100% khóa chiêu toàn bộ địch trong 8 giây, gây (1.5 x ATK) sát thương một vùng rộng phía trước.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED INTc lên 8 cấp, giảm DEF toàn bộ địch đi 1 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao.',
			'extra_ability' : 'Miễn nhiễm sát thương liên hoàn.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'halloween_law_int_legend.png'
		},
		'tags': 'skill_deal_dmg, skill_silence_enemies, hs_speed_up, hs_def_down'
	},

	'146' : {
		'title' : "Hancock: Midnight Party Queen, Happy Scary Halloween",
		'color' : 'int',
		'class' : 'cerebral, shooter',
		'stars' : 'Rare Recruit',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (2 x ATK) sát thương một vùng nhỏ, tăng ATK đồng minh lên 5 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng CRIT INTc lên 3 cấp, ATK INTc lên 1 cấp. Khi CRIT, tăng DEF INTc lên 1 cấp (Cộng dồn 3 lần).'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh tê liệt.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_hancock_halloween_2020.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_crit_up, hs_atk_up, hs_def_up, target_nearby, ability_prevent_para'
	},

	'147' : {
		'title' : "Buggy: Terrifying Prank Clown, Happy Scary Halloween",
		'color' : 'int',
		'class' : 'driven, shooter',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : '100% khóa chiêu 2 kẻ đich trong 19 giây, giảm ATK địch đi 5 cấp trong 24 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng DEF INTc lên 3 cấp trong 40 giây đầu.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh tê liệt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_buggy_halloween_2020.png'
		},
		'tags': 'skill_silence_enemies, skill_atk_down, hs_def_up, target_nearby, ability_prevent_para'
	},

	'148' : {
		'title' : "Crocodile: Ruler of the Night, Happy Scary Halloween",
		'color' : 'int',
		'class' : 'driven, cerebral',
		'stars' : 'Raid',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 34 Giây',
			'des' : 'Gây (1.5 x ATK) một vùng rộng, 100% trói 1 kẻ địch trong 7 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK INTc lên 3 cấp, tăng tỉ lệ chặn đòn INTc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 heal himself → Strong Attack → Strong Attack',
		'img' : {
			'src' : 'int_crocodile_halloween_2020_raid.png'
		},
		'tags': 'skill_deal_dmg, skill_bind_enemies, hs_atk_up, hs_guard_up, target_nearby, ability_prevent_bind'
	},

	'149' : {
		'title' : "Moria & Perona, The Beginning of a Nightmare",
		'color' : 'int',
		'class' : 'slasher, shooter',
		'stars' : 'Pirate Festival',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Cắt 15% HP một vùng rộng, 100% khóa chiêu 1 kẻ địch ATK cao trong 29 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh lên 5 cấp. Trong 30 giây đầu, tăng DEF bản thân lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa chiêu.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_moria_perona_pvp.png'
		},
		'tags': 'skill_cut_hp, skill_silence_enemies, hs_hp_up, hs_def_up, target_nearby, ability_prevent_silence'
	},

	'150' : {
		'title' : "Gol D. Roger, Captain of the Roger Pirates",
		'color' : 'psy',
		'class' : 'slasher, freespirit',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 2000 sát thương chuẩn lên toàn bộ kẻ địch. Giảm ATK vùng lớn kẻ địch đi 7 cấp, giảm DEF vùng lớn kẻ địch đi 5 cấp, giảm SPEED vùng lớn kẻ địch đi 10 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, tăng DEF đồng minh lên 3 cấp. Trong 60 giây đầu, tăng ATK và SPEED đồng minh lên 5 cấp. Khi còn 40 giây, tăng tốc tích nộ đồng minh lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa kỹ năng.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_legend_gold_d_roger.png'
		},
		'tags': 'skill_fixed_dmg, skill_def_down, skill_atk_down, skill_speed_down, hs_def_up, hs_atk_up, hs_speed_up, hs_ct_up, target_nearby, ability_prevent_silence'
	},

	'151' : {
		'title' : "Kozuki Oden, Heir to the Shogun of Wano",
		'color' : 'str',
		'class' : 'slasher, freespirit',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây 1500 sát thương chuẩn lên toàn bộ kẻ địch. Gây (2 x ATK) sát thương một vùng lớn. Tăng ATK SLASHER lên 7 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc tích nộ và ATK của SLASHER lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao.',
			'extra_ability' : 'Miễn nhiễm khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'str_legend_oden.png'
		},
		'tags': 'skill_fixed_dmg, skill_deal_dmg, skill_atk_up, skill_atk_up_class_slasher, hs_ct_up, hs_ct_up_class_slasher, hs_atk_up, hs_atk_up_class_slasher, target_highest_speed, ability_prevent_bind'
	},

	'152' : {
		'title' : "Onami & Orobi, Heroine Dancers of Wano Country",
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'stars' : 'Kizuna',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây sát thương theo thời gian cấp 2 lên toàn bộ kẻ địch trong 30 giây. Tăng ATK của DEXc lên 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED DEXc lên 5 cấp. Tăng ATK DEXc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP cao.',
			'extra_ability' : '60% tránh khóa kỹ năng.',
		},
		'pattern': 'Normal Attack → Level 2 Medium Range Heal → Normal Attack → Level 2 Small Range Heal',
		'img' : {
			'src' : 'onami_orobi_kizuna_dex.png'
		},
		'tags': 'skill_continuous_dmg_up, skill_atk_up, hs_speed_up, hs_atk_up, target_highest_hp, ability_prevent_silence'
	},

	'153' : {
		'title' : "Queen, Brachiosaurus Rampage",
		'color' : 'qck',
		'class' : 'powerhouse, driven',
		'stars' : 'Treasure Map',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Tăng ATK và DEF bản thân lên 5 cấp trong 15 giây. Gây (ATK x 1.7) sát thương lên 2 kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh QCKc lên 5 cấp và DEF đồng minh QCKc lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Hồi 250HP mỗi lượt.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'tm_qck_queen.png'
		},
		'tags': 'skill_atk_up, skill_def_up, skill_deal_dmg, hs_hp_up, hs_def_up, target_nearby, ability_heal'
	},

	'154' : {
		'title' : "Zorojuro, A Bloodlust-Eldritch Ronin",
		'color' : 'dex',
		'class' : 'slasher, driven',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (ATK x 1) sát thương lên vùng lớn kẻ địch trên một đường thẳng. Khi còn 50 giây, gây (ATK x 2) sát thương lên toàn bộ kẻ địch. Khi còn 30 giây, gây (ATK x 2) sát thương lên toàn bộ kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc tích nộ bản thân lên 3 cấp. Tăng ATK bản thên lên 5 cấp. Tăng ATK lên 5 cấp và SPEED lên 3 cấp đối với đồng minh DEXc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill. Giảm sát thương từ kẻ địch QCKc đi 30%.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'zorojuro_dex_legend.png'
		},
		'tags': 'skill_deal_dmg, hs_ct_up, hs_atk_up, hs_speed_up, ability_prevent_silence, ability_dmg_reduce'
	},

	'155' : {
		'title' : "Kaido, Kanabo Bashful-Beatdown",
		'color' : 'qck',
		'class' : 'powerhouse, driven',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Giảm DEF vùng lớn kẻ địch đi 3 cấp trong 5 giây. Gây (ATK x 2) sát thương vùng lớn kẻ địch. 50% cơ hội làm tê liệt toàn bộ kẻ địch trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, Tăng ATK và SPEED bản thân lên 10 cấp. Tăng HP lên 5 cấp và DEF lên 3 cấp đối với đồng minh QCKc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill. Giảm sát thương từ kẻ địch STRc đi 30%.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'kaido_qck_legend.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, skill_para_enemies, hs_atk_up, hs_speed_up, hs_hp_up, hs_def_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'156' : {
		'title' : "Kamazo the Manslayer, Orochi's Assassin",
		'color' : 'qck',
		'class' : 'slasher, driven',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Giảm ATK toàn bộ kẻ địch đi 5 cấp trong 20 giây. Gây (ATK x 1.7) sát thương một vùng kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và CRIT lên 5 cấp đối với đồng minh QCKc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% cơ hội chặn khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'qck_kamazo_rr.png'
		},
		'tags': 'skill_atk_down, skill_deal_dmg, hs_atk_up, skill_crit_up, target_nearby, ability_prevent_bind'
	},

	'157' : {
		'title' : "Gyukimaru, Contemplating Warrior Monk",
		'color' : 'dex',
		'class' : 'slasher, striker',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Tăng DEF đồng minh DEXc lên 2 cấp trong 15 giây. Gây (ATK x 2) sát thương lên 3 kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và CRIT lên 5 cấp đối với đồng minh DEXc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '80% cơ hội chặn tê liệt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'dex_gyukimaru_rr.png'
		},
		'tags': 'skill_def_up, skill_deal_dmg, hs_atk_up, skill_crit_up, target_nearby, ability_prevent_para'
	},

	'158' : {
		'title' : "Hiyori, Mysterious Beauty",
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'stars' : 'Event Character',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương một vùng kẻ địch. Hồi 1800HP cho đồng minh DEXc. Tăng DEF đồng minh DEXc lên 2 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và GUARD lên 5 cấp cho đồng minh DEXc.'
		},
		'others' : {
			'target' : 'Kẻ địch DEF cao.',
			'extra_ability' : 'Hồi 250HP mỗi lượt.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'dex_hiyori_event.png'
		},
		'tags': 'skill_def_up, skill_deal_dmg, skill_heal, hs_atk_up, hs_guard_up, target_highest_def, ability_heal'
	},

	'159' : {
		'title' : "Otoko, Girl Being Followed",
		'color' : 'dex',
		'class' : 'shooter, freespirit',
		'stars' : 'Event Character',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây sát thương theo thời gian (cấp 2) cho 1 kẻ địch trong 50 giây. Tăng GUARD đồng minh DEXc lên 5 cấp trong 50 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED lên 5 cấp và HP lên 3 cấp cho đồng minh DEXc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% cơ hộ chặn khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'dex_otoko_event.png'
		},
		'tags': 'skill_continuous_dmg_up, skill_guard_up, hs_speed_up, hs_hp_up, target_nearby, ability_prevent_bind'
	},

	'160' : {
		'title' : "Lucy, A Dark-Horse Champion Attaining Victory",
		'color' : 'qck',
		'class' : 'striker, freespirit',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Giảm DEF kẻ địch STRc đi 3 cấp trong 5 giây. Gây (ATK x 2) sát thương một vùng kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và HP lên 5 cấp cho đồng minh QCKc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '80% cơ hộ chặn khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'qck_lucy_pf_gift.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, hs_atk_up, hs_hp_up, target_nearby, ability_prevent_bind'
	},

	'161' : {
		'title' : "Trafalgar Law, Captive Heart",
		'color' : 'str',
		'class' : 'slasher, freespirit',
		'stars' : 'Pirate Festival',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 2) sát thương một vùng lớn kẻ địch. Tăng ATK lên 6 cấp và SPEED lên 6 cấp cho đồng minh STRc trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng HP lên 5 cấp và DEF lên 3 cấp cho đồng minh STRc. Tăng ATK lên 5 cấp cho đồng minh SLASHER.'
		},
		'others' : {
			'target' : 'Kẻ địch ít máu.',
			'extra_ability' : 'Miễn nhiễm khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (medium range)',
		'img' : {
			'src' : 'str_law_pf_rr.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_speed_up, hs_hp_up, hs_def_up, target_low_hp, ability_prevent_silence'
	},

	'162' : {
		'title' : "Luffytaro, Facing Death",
		'color' : 'psy',
		'class' : 'fighter, freespirit',
		'stars' : 'Raid',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 14 Giây',
			'des' : 'Gây (ATK x 2) sát thương một kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và SPEED lên 3 cấp toàn bộ đồng minh.'
		},
		'others' : {
			'target' : 'Kẻ địch ít máu.',
			'extra_ability' : '60% chặn khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'psy_luffytaro_raid.png'
		},
		'tags': 'skill_deal_dmg, hs_atk_up, hs_speed_up, target_low_hp, ability_prevent_bind'
	},

	'163' : {
		'title' : "Hawkins, Plan-Thwarting Headliner",
		'color' : 'str',
		'class' : 'slasher, cerebral',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây 1200 sát thương chuẩn cho toàn bộ địch. Khi còn 40 giây, gây 1500 sát thương chuẩn.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 5 cấp và DEF lên 2 cấp cho đồng minh STRc.'
		},
		'others' : {
			'target' : 'Kẻ địch ATK cao.',
			'extra_ability' : '60% chặn khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'str_hawkins_pf_gift.png'
		},
		'tags': 'skill_fixed_dmg, hs_hp_up, hs_def_up, target_highest_atk, ability_prevent_silence'
	},

	'164' : {
		'title' : "Cavendish, Affectionate Nobleman",
		'color' : 'dex',
		'class' : 'slasher, driven',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Tăng DEF lên 4 cấp cho đồng minh có DEF thấp nhất trong 20 giây. Gây (ATK x 3) sát thương cho kẻ địch có DEF thấp nhất.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, giảm CRIT kẻ địch đi 7 cấp. Tăng DEF lên 4 cấp và GUARD lên 5 cấp cho đồng mình DEXc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm tê liệt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'dex_cavendish_pf_rr.png'
		},
		'tags': 'skill_def_up, skill_deal_dmg, hs_crit_down, hs_def_up, hs_guard_up, target_nearby, ability_prevent_para'
	},

	'165' : {
		'title' : "Bege & Pez, Enjoying the Evening With My Son",
		'color' : 'dex',
		'class' : 'shooter, driven',
		'stars' : 'Kizuna',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 36 Giây',
			'des' : 'Gây (ATK x 2) sát thương cho 2 kẻ địch. Tăng DEF lên 4 cấp cho toàn bộ đồng minh trong 10 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 5 cấp và DEF lên 1 cấp cho toàn bộ đồng minh.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Hồi 250HP mỗi lượt.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range)  → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'dex_bege_pez_kizuna.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, hs_hp_up, hs_def_up, target_nearby, ability_heal'
	},

	'166' : {
		'title' : "Monkey D. Garp, A Substance over Style Christmas",
		'color' : 'psy',
		'class' : 'freespirit, fighter',
		'stars' : 'Treasure Map',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây 3000 sát thương chuẩn cho 1 kẻ địch. Gây 1200 sát thương chuẩn cho kẻ địch INTc.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED lên 5 cấp và DEF lên 2 cấp cho đồng minh FREESPIRIT.'
		},
		'others' : {
			'target' : 'Kẻ địch thấp máu.',
			'extra_ability' : '60% cơ hội chặn sát thương theo thời gian.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'psy_garp_tm.png'
		},
		'tags': 'skill_fixed_dmg, hs_speed_up, hs_def_up, target_low_hp, ability_prevent_stack_dmg'
	},

	'167' : {
		'title' : "Vivi & Rebecca, Happy White Christmas",
		'color' : 'dual',
		'class' : 'cerebral, striker',
		'stars' : 'Legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây 3000 sát thương chuẩn cho 1 kẻ địch. Tăng ATK lên 7 cấp và CRIT lên 7 cấp cho toàn bộ đồng minh trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp, CRIT lên 5 cấp và tăng tốc tích nộ lên 1 cấp cho toàn bộ đồng minh.'
		},
		'others' : {
			'target' : 'Kẻ địch SPEED cao.',
			'extra_ability' : 'Miễn nhiễm khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Lv.3 heal allies (forward large range) → Fullpower Attack',
		'img' : {
			'src' : 'qck_dex_vivi_rebecca_legend_v2.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_up, skill_crit_up, hs_atk_up, hs_crit_up, hs_ct_up, target_highest_speed, ability_prevent_bind'
	},

	'168' : {
		'title' : "Shirahoshi & Mansherry, Two People Decorating the Christmas Tree",
		'color' : 'dual',
		'class' : 'cerebral, striker',
		'stars' : 'Legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Hồi phục (RCV x 3) HP cho toàn bộ đồng minh. Tăng DEF toàn bộ đồng minh lên 3 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 5 cấp và GUARD lên 5 cấp cho toàn bộ đồng minh.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (medium range)',
		'img' : {
			'src' : 'qck_psy_shira_mansherry_legend_v2.png'
		},
		'tags': 'skill_heal, skill_def_up, hs_hp_up, hs_guard_up, target_nearby, ability_prevent_silence'
	},

	'169' : {
		'title' : "Neptune, Prepared Santa Claus",
		'color' : 'qck',
		'class' : 'cerebral, freespirit',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (ATK x 2) sát thương một vùng lớn kẻ địch. Hồi (RCV x 1.5) HP cho đồng minh FREESPIRIT/CEREBRAL.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh CEREBRAL lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ít máu.',
			'extra_ability' : '60% chặn khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : 'qck_neptune_rr_xmas_2020.png'
		},
		'tags': 'skill_heal, skill_deal_dmg, hs_hp_up, target_low_hp, ability_prevent_silence'
	},

	'170' : {
		'title' : "Leo, Warrior Overlooking the Party",
		'color' : 'dex',
		'class' : 'cerebral, freespirit',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Giảm DEF đi 2 cấp và SPEED đi 5 cấp một vùng kẻ địch trong 20 giây. Đồng minh FREESPIRIT/CEREBRAL tăng DEF lên 2 cấp trong 15 giây. Gây (ATK x 2) sát thương cho 1 kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng GUARD lên 5 cấp cho đồng mình CEREBRAL. Tăng tỉ lệ đánh trượt của kẻ địch lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ít máu.',
			'extra_ability' : '60% chặn khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (short range)',
		'img' : {
			'src' : 'dex_leo_rr_xmas_2020.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_speed_down, skill_def_up, hs_guard_up, hs_miss_up, target_low_hp, ability_prevent_bind'
	},

	'171' : {
		'title' : "Coby, White Night Christmas",
		'color' : 'dex',
		'class' : 'cerebral, fighter',
		'stars' : 'Raid',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 17 Giây',
			'des' : 'Hồi máu bản thân bằng với (RCV x 3) HP. Tăng ATK lên 5 cấp cho đồng minh CEREBRAL trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 5 cấp cho đồng minh CEREBRAL.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '50% chặn khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (short range)',
		'img' : {
			'src' : 'dex_coby_raid_xmas_2020.png'
		},
		'tags': 'skill_heal, skill_atk_up, hs_hp_up, target_nearby, ability_prevent_silence'
	},

	'172' : {
		'title' : "Hina, Glittering Night",
		'color' : 'qck',
		'class' : 'cerebral, striker',
		'stars' : 'Ambush',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Cắt 50% HP kẻ địch có DEF cao nhất. Giảm DEF 3 kẻ địch bất kì đi 4 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 5 cấp và ATK lên 2 cấp cho đồng minh CEREBRAL.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% chặn sát thương theo thời gian.',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 heal allies (short range) → Normal Attack',
		'img' : {
			'src' : 'qck_hina_ambush_xmas_2020.png'
		},
		'tags': 'skill_cut_hp, skill_def_down, hs_hp_up, hs_atk_up, target_nearby, ability_prevent_stack_dmg'
	},

	'173' : {
		'title' : "Bartolomeo, Betting on a Life's Worth",
		'color' : 'dex',
		'class' : 'driven, striker',
		'stars' : 'Pirate Festival',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (ATK x 1.7) sát thương một vùng kẻ địch. Tăng DEF đồng mình DEXc lên 3 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 5 cấp và DEF lên 2 cấp cho đồng minh DEXc.'
		},
		'others' : {
			'target' : 'Kẻ địch thấp máu.',
			'extra_ability' : '60% chặn khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 Heal allies (medium range) → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'dex_bartolomeo_pf_gift.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, hs_hp_up, hs_def_up, target_low_hp, ability_prevent_bind'
	},

	'174' : {
		'title' : "Sobamask, Transparent Warrior",
		'color' : 'dex',
		'class' : 'fighter, powerhouse',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Gây (ATK x 2) sát thương lên một vùng kẻ địch. Khi còn 40 giây, gây tiếp (ATK x 2) sát thương lên một vùng kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và SPEED lên 5 cấp cho đồng minh DEXc. Giảm DEF kẻ địch QCKc đi 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'dex_osoba_mask_pf_rr.png'
		},
		'tags': 'skill_deal_dmg, hs_atk_up, hs_speed_up, hs_def_down, target_nearby, ability_prevent_silence'
	},

	'175' : {
		'title' : "Sakazuki - Akainu, Uncompromised Determination and Justice",
		'color' : 'str',
		'class' : 'fighter, shooter',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 38 Giây',
			'des' : 'Giảm DEF kẻ địch có RCV cao nhất đi 5 cấp trong 15 giây. Gây (ATK x 5) sát thương lên kẻ địch có RCV cao nhất. Gây sát thương theo thời gian (Cấp 2) lên một vùng lớn kẻ địch trong 30 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp cho đồng minh STRc/QCKc/DEXc. Trong 50 giây đầu, tăng ATK bản thân lên 5 cấp. Khi còn 40 giây, giảm DEF toàn bộ địch đi 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Không có.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'str_sakazuki_legend_v3.png'
		},
		'tags': 'skill_deal_dmg, hs_atk_up, hs_speed_up, hs_def_down, target_nearby, ability_prevent_silence'
	},

	'176' : {
		'title' : "Basil Hawkins, Fortune-Telling Future",
		'color' : 'psy',
		'class' : 'cerebral, striker',
		'stars' : 'Kizuna',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 33 Giây',
			'des' : 'gây (ATK x 1.7) sát thương một vùng kẻ địch. Giảm khóa skill đồng minh PSYc đi 30 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và HP lên 3 cấp cho đồng minh PSYc.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP cao nhất.',
			'extra_ability' : '80% cơ hội chặn khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_hawkins_kizuna.png'
		},
		'tags': 'skill_deal_dmg, skill_silence_down, hs_atk_up, hs_hp_up, target_highest_hp, ability_prevent_silence'
	},

	'177' : {
		'title' : "Eustass Kid, Unyielding Prisoner",
		'color' : 'str',
		'class' : 'fighter, driven',
		'stars' : 'Treasure Map',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'gây (ATK x 1.5) sát thương một vùng kẻ địch. Giảm DEF và SPEED toàn bộ kẻ địch đi 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp và HP lên 2 cấp cho đồng minh STRc.'
		},
		'others' : {
			'target' : 'Kẻ địch thấp máu.',
			'extra_ability' : '60% cơ hội chặn khóa skill.',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 heal allies (small range) → Normal Attack',
		'img' : {
			'src' : 'str_kid_tm.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_speed_down, hs_atk_up, hs_hp_up, target_low_hp, ability_prevent_silence'
	},

	'178' : {
		'title' : "Kaido VS Big Mom, Two Menacing Emperors",
		'color' : 'str',
		'class' : 'powerhouse, driven',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Cắt 90% HP một kẻ địch. Giảm tốc tích nộ bản thân đi 10 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng ATK lên 10 cấp và DEF lên 3 cấp cho bản thân. Khi còn 60 giây, Tăng SPEED lên 5 cấp và ATK lên 5 cấp cho bản thân.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'str_int_bigmom_kaido_vs_legend.png'
		},
		'tags': 'skill_cut_hp, skill_ct_down, hs_atk_up, hs_def_up, hs_speed_up, target_nearby, ability_prevent_bind'
	},

	'179' : {
		'title' : "Kaido VS Big Mom, Two Menacing Emperors",
		'color' : 'int',
		'class' : 'powerhouse, driven',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương một vùng kẻ địch. Khi còn 50 giây, gây thêm (ATK x 2) sát thương một vùng kẻ địch. Khi còn 30 giây, gây thêm (ATK x 3) sát thương một vùng kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, tăng tốc tích nộ đồng minh INTc lên 5 cấp. Khi còn 60 giây, tăng SPEED bản thân lên 8 cấp. Khi còn 30 giây, tăng tốc tích nộ bản thân lên 10 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'str_int_bigmom_kaido_vs_legend.png'
		},
		'tags': 'skill_deal_dmg, hs_ct_up, hs_speed_up, target_nearby, ability_prevent_silence'
	},

	'180' : {
		'title' : "King the Wildfire, Beast Pirates All-Star",
		'color' : 'str',
		'class' : 'powerhouse, driven',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương một vùng lớn. Giảm DEF 3 kẻ địch đi 2 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh STRc/DEXc/INTc lên 6 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'str_king_rr.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'181' : {
		'title' : "Queen the Plague, Beast Pirates All-Star",
		'color' : 'psy',
		'class' : 'powerhouse, driven',
		'stars' : 'Rare Recruit',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây 1500 sát thương chuẩn cho 3 kẻ địch. Hồi (RCV x 1.5) HP cho đồng minh STRc/PSYc/INTc.',
		},
		'hidden_skill' : {
			'des' : 'Tăng GUARD lên 6 cấp và HP lên 3 cấp cho đồng minh STRc/PSYc/INTc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_queen_rr.png'
		},
		'tags': 'skill_fixed_dmg, skill_heal, hs_guard_up, hs_hp_up, target_nearby, ability_prevent_silence'
	},

	'182' : {
		'title' : "Jack the Drought, Beast Pirates All-Star",
		'color' : 'int',
		'class' : 'powerhouse, driven',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Gây (ATK x 3) sát thương lên một vùng nhỏ và có 60% cơ hội khóa skill 2 kẻ địch trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng minh STRc/PSYc/INTc lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_jack_rr.png'
		},
		'tags': 'skill_deal_dmg, skill_silence_enemies, hs_speed_up, target_nearby, ability_prevent_silence'
	},

	'183' : {
		'title' : "Onami & Shinobu, Two Pretty Flowering Female Ninjas",
		'color' : 'int',
		'class' : 'freespirit, cerebral',
		'stars' : 'Raid',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : '50% cơ hội khóa skill 2 kẻ địch trong 10 giây. Hồi (RCV x 1.5) HP cho đồng minh INTc.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP lên 2 cấp và GUARD lên 5 cấp cho đồng minh INTc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Hồi 250HP mỗi lượt.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'int_onami_shinobu_raid.png'
		},
		'tags': 'skill_silence_enemies, skill_heal, hs_hp_up, hs_guard_up, target_nearby, ability_heal'
	},

	'184' : {
		'title' : "Drake, Ancient Menace",
		'color' : 'str',
		'class' : 'striker, powerhouse',
		'stars' : 'Pirate Festival',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (ATK x 1.8) sát thương toàn bộ kẻ địch trong một vùng. Tăng ATK đồng minh có ATK cao nhất lên 10 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng tốc độ tích nộ lên 2 cấp và ATK lên 5 cấp cho đồng minh STRc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% cơ hội tránh khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 heal himself → Strong Attack → Strong Attack',
		'img' : {
			'src' : 'str_xdrake_pf_gift.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_ct_up, hs_atk_up, target_nearby, ability_prevent_bind'
	},

	'185' : {
		'title' : 'Diamond" Jozu, Right Fist Ice Crusher',
		'color' : 'int',
		'class' : 'fighter, powerhouse',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây 2100 sát thương chuẩn cho kẻ địch vùng nhỏ theo chiều dọc. Tăng CRIT đồng mình INTc lên 3 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng minh INTc lên 5 cấp. Khi còn 70 giây, tăng DEF đồng minh INTc lên 1 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Không có.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_jozu_pf_rr.png'
		},
		'tags': 'skill_fixed_dmg, skill_crit_up, hs_speed_up, hs_def_up, target_nearby'
	},

	'186' : {
		'title' : "God Enel, Divine-God's Desperate Ability",
		'color' : 'psy',
		'class' : 'driven, striker',
		'stars' : 'Legend',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 17 Giây',
			'des' : 'Gây (ATK x 1.1) sát thương cho toàn bộ địch. Tăng DEF lên 3 cấp và SPEED lên 5 cấp cho đồng minh PSYc trong 17 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED lên 5 cấp và DEF lên 5 cấp cho đồng minh PSYc. Trong 40 giây đầu, giảm tốc độ tích nộ kẻ địch slasher đi 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill. Giảm 30% sát thương từ kẻ địch INTc.',
		},
		'pattern': 'Normal Attack → Level 2 Medium Range Heal → Normal Attack → Level 2 Medium Range Heal',
		'img' : {
			'src' : 'psy_enel_legend.png',
			'sm' : 'sm_psy_enel_legend.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, skill_speed_up, hs_def_up, hs_speed_up, hs_ct_down, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'187' : {
		'title' : "Soldier & Rebecca",
		'color' : 'psy',
		'class' : 'freespirit, shooter',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Gây (ATK x 2) sát thương cho 2 kẻ địch. Giảm DEF đi 3 cấp một vùng lớn kẻ địch trong 20 giây. Tăng DEF đồng minh SLASHER lên 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 6 cấp, DEF lên 2 cấp và HP lên 5 cấp cho đồng minh PSYc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill. Giảm 30% sát thương từ kẻ địch INTc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'psy_toy_solider_rebecca_pf_rr.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, skill_def_up, hs_atk_up, hs_def_up, hs_hp_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'188' : {
		'title' : "Ace VS Akainu, Flame and Magma  - Ace",
		'color' : 'str',
		'class' : 'freespirit, shooter',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Tăng ATK bản thân lên 7 cấp trong 20 giây. Gây (ATK x 2) sát thương một vùng lớn. Khi HP dưới 60%, gây thêm (ATK x 2) sát thương lên toàn bộ kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh STRc lên 5 cấp. Tăng DEF đồng minh STRc lên 3 cấp. Trong 40 giây đầu, tăng ATK bản thân lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm 30% sát thương từ kẻ địch DEXc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'vs_legend_akainu_ace.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_atk_up, hs_def_up, target_nearby, ability_dmg_reduce, ability_prevent_bind'
	},

	'189' : {
		'title' : "Ace VS Akainu, Flame and Magma  - Akainu",
		'color' : 'qck',
		'class' : 'driven, powerhouse',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (ATK x 2) sát thương một vùng lớn. Gây thêm (ATK x 1.5) sát thương cho kẻ địch STRc. Trong 40 giây đầu, giảm thêm 30% HP một vùng lớn kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh QCKc lên 5 cấp. Tăng DEF đồng minh QCKc lên 3 cấp. Trong 20 giây đầu, tăng tốc tích nộ bản thân lên 5 cấp và ATK bản thân lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm 30% sát thương từ kẻ địch STRc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'vs_legend_akainu_ace.png'
		},
		'tags': 'skill_deal_dmg, skill_cut_hp, hs_atk_up, hs_def_up, hs_ct_up, target_nearby, ability_dmg_reduce, ability_prevent_bind'
	},

	'190' : {
		'title' : "Monkey D. Luffy, Younger Brother Rescuing His Older Brother",
		'color' : 'str',
		'class' : 'freespirit, fighter',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Gây (ATK x 2) sát thương một kẻ địch. Tăng ATK đồng minh có ATK cao nhất lên 5 cấp trong 10 giây. Khi HP dưới 50%, tăng ATK thêm 4 cấp trong 10 giây cho đồng minh có ATK cao nhất.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh STRc lên 5 cấp. Tăng ATK bản thân lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát trạng thái khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'vs_akai_ace_batch_rr_str_luffy.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_hp_up, hs_atk_up, target_nearby, ability_prevent_bind'
	},

	'191' : {
		'title' : "Diamond Jozu, Body that Deflected the Worlds Strongest Slash",
		'color' : 'str',
		'class' : 'powerhouse, fighter',
		'stars' : 'Rare Recruit',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây (ATK x 2) sát thương một kẻ địch. Tăng DEF đồng minh STRc lên 2 cấp. Hồi 1000HP cho đồng minh STRc.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh STRc lên 5 cấp. Tăng DEF đồng minh STRc lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao.',
			'extra_ability' : '60% thoát trạng thái khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range)  → Normal Attack → Lv.2 heal allies(small range)',
		'img' : {
			'src' : 'vs_akai_ace_batch_rr_str_jozu.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, skill_heal, hs_hp_up, hs_def_up, target_highest_def, ability_prevent_bind'
	},

	'192' : {
		'title' : "Kuzan, Ice Blocking Earthquake <span class='ht-none'>Aokiji</span>",
		'color' : 'qck',
		'class' : 'shooter, freespirit',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoạt',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương một vùng kẻ địch. Giảm DEF những kẻ địch đó đi 2 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp, và HP lên 2 cấp cho đồng minh SHOOTER/FREESPIRIT.'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao.',
			'extra_ability' : '60% thoát trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'vs_akai_ace_batch_rr_qck_aokiji.png'
		},
		'tags': 'skill_deal_dmg, skill_def_down, hs_hp_up, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'193' : {
		'title' : "Sengoku the Buddha, Resourceful General's Move",
		'color' : 'qck',
		'class' : 'powerhouse, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 40 Giây',
			'des' : 'Gây 3500 sát thương chuẩn cho 2 kẻ địch. Tăng SPEED đồng minh QCKc lên 4 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp, và HP lên 2 cấp cho đồng minh QCKc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range)  → Normal Attack → Lv.2 heal allies(small range)',
		'img' : {
			'src' : 'vs_akai_ace_batch_rr_qck_sengoku.png'
		},
		'tags': 'skill_fixed_dmg, skill_speed_up, hs_hp_up, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'194' : {
		'title' : "Hannyabal, Pride of the Vice Warden",
		'color' : 'qck',
		'class' : 'driven, striker',
		'stars' : 'Pirate Festival',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Tăng ATK cho đồng minh QCKc lên 10 cấp trong 5 giây. Gây (ATK x 1.5) sát thương cho 2 kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp, và CRIT lên 5 cấp cho đồng minh QCKc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range)  → Normal Attack → Lv.2 heal allies(small range)',
		'img' : {
			'src' : 'pf_gift_qck_hannyabal.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_crit_up, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'195' : {
		'title' : "Luffy & Ace, Brothers Joint Struggle",
		'color' : 'dex',
		'class' : 'freespirit, shooter',
		'stars' : 'Treasure Map',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Gây (ATK x 2) sát thương một vùng kẻ địch. Tăng ATK cho đồng minh DEXc lên 6 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp, và SPEED lên 5 cấp cho đồng minh DEXc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '80% thoát trạng thái tê liệt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'tm_dex_luffy_ace.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_speed_up, hs_atk_up, target_nearby, ability_prevent_para'
	},

	'196' : {
		'title' : "Doflamingo, The Man Who Enjoys the Changing Times",
		'color' : 'qck',
		'class' : 'driven, slasher',
		'stars' : 'Kizuna',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : '100% tê liệt 2 kẻ địch trong 20 giây. Giảm DEF đi 3 cấp và SPEED đi 4 cấp trong 20 giây toàn bộ địch. Giảm DEF kẻ địch STRc thêm 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp, và DEF lên 2 cấp cho đồng minh QCKc.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao.',
			'extra_ability' : '60% thoát trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'kizuna_qck_dofflamingo.png'
		},
		'tags': 'skill_para_enemies, skill_def_down, skill_speed_down, hs_def_up, hs_atk_up, target_highest_speed, ability_prevent_silence'
	},

	'197' : {
		'title' : "Magellan, Despair-Inducing Poison",
		'color' : 'qck',
		'class' : 'driven, shooter',
		'stars' : 'Legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Giảm DEF một vùng kẻ địch đi 3 cấp trong 20 giây, và gây (ATK x 1.7) sát thương. 100% cơ hội bứt tốc bản thân, 50% cơ hội bứt tốc 1 đồng minh QCKc. Trong 40 giây đầu, giảm DEF toàn bộ địch đi 3 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp, và HP lên 5 cấp cho đồng minh QCKc. Trong 30 giây đầu, tăng tốc tích nộ bản thân lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm trạng thái khóa skill. Giảm 30% sát thương từ kẻ địch STRc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_legend_magellan_strong_type.png'
		},
		'tags': 'skill_def_down, skill_deal_dmg, skill_haste, hs_atk_up, hs_hp_up, hs_ct_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'198' : {
		'title' : "Moria INT legend - V1",
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'Legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 1700 sát thương chuẩn lên một vùng lớn kẻ địch. 100% giảm một nửa chỉ số của 3 kẻ địch trong 20 giây. (Chỉ số ở đây là ATK, DEF, v.v.).',
		},
		'hidden_skill' : {
			'des' : 'Đồng minh INTc tăng HP lên 5 cấp và DEF lên 3 cấp. Trong 30 giây đầu, tăng tốc tích nộ đồng minh INTc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill. Giảm 30% sát thương từ kẻ địch PSYc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_legend_moria_strong_type.png'
		},
		'tags': 'skill_fixed_dmg, skill_stat_down, hs_hp_up, hs_def_up, hs_ct_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'199' : {
		'title' : "Blackbeard DUAL legend",
		'color' : 'dual',
		'class' : 'driven, powerhouse',
		'stars' : 'Legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (ATK x 2) sát thương một vùng lớn. Toàn bộ kẻ địch giảm SPEED đi 5 cấp. 100% khóa skill 2 kẻ địch có CT lớn hơn hoặc bằng 80%.',
		},
		'hidden_skill' : {
			'des' : 'Đồng minh DRIVEN/POWERHOUSE tăng ATK lên 5 cấp, HP lên 5 cấp. Toàn bộ đồng minh tăng SPEED lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill và khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_legend_blackbeard_dual.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_down, skill_silence_enemies, hs_atk_up, hs_hp_up, hs_speed_up, target_nearby, ability_prevent_bind, ability_prevent_silence'
	},

	'200' : {
		'title' : "Jesus Burgess",
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'Event',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 3) cho 1 kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Trong 30 giây đầu, tăng ATK bản thân lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa kĩ năng.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_jesus_burgess_2021_rr_v2.png'
		},
		'tags': 'skill_deal_dmg, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'201' : {
		'title' : "Vasco Shot",
		'color' : 'int',
		'class' : 'driven, shooter',
		'stars' : 'Raid',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Tăng CRIT đồng minh lên 5 cấp. Giảm DEF kẻ địch trong một vùng rộng đi 3 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Đồng minh INTc tăng ATK lên 5 cấp. Đồng minh INTc tăng HP lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa kĩ năng.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_rr_vasco_shot.png'
		},
		'tags': 'skill_crit_up, skill_def_down, hs_atk_up, hs_hp_up, target_nearby, ability_prevent_silence'
	},

	'202' : {
		'title' : "Avalo Pizarro",
		'color' : 'psy',
		'class' : 'driven, powerhouse',
		'stars' : 'Rare Recruit',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Đồng minh trong một vùng nhỏ hồi phục (RCV x 3) HP đồng thời tăng GUARD những đồng minh này lên 5 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Đồng minh PSYc tăng ATK lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh khóa kĩ năng.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'psy_rr_avalo_pizarro.png'
		},
		'tags': 'skill_heal, skill_guard_up, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'203' : {
		'title' : "Catarina Devon",
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương một vùng kẻ địch. 70% làm tê liệt một kẻ địch trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, INTc tăng ATK và SPEED lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% tránh tê liệt.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'int_rr_catarina_devon.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hs_atk_up, hs_speed_up, target_nearby, ability_prevent_para'
	},

	'204' : {
		'title' : "Bellamy the Hyena, Bullet of Dressrosa",
		'color' : 'qck',
		'class' : 'driven, fighter',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 15 Giây',
			'des' : 'Cắt HP một vùng rộng đi 15%. Giảm DEF kẻ địch vùng đó đi 4 cấp trong 23 giây.',
		},
		'hidden_skill' : {
			'des' : 'Giảm DEF bản thân đi 2 cấp. Tăng ATK bản thân lên 5 cấp. Tăng HP đồng minh lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Không có.',
		},
		'pattern': 'Normal Attack → Strong Attack → Full Power Attack → Normal Attack',
		'img' : {
			'src' : 'qck_rr_bellamy.png'
		},
		'tags': 'skill_cut_hp, skill_def_down, hs_def_down, hs_hp_up, hs_atk_up, target_nearby'
	},

	'205' : {
		'title' : "Shiryu, Chief's Betrayal",
		'color' : 'qck',
		'class' : 'driven, slasher',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (ATK x 2) sát thương lên một vùng kẻ địch. Trong 30 giây đầu, gây thêm 2000 sát thương chuẩn cho kẻ địch STRc.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh QCKc lên 6 cấp. Tăng HP đồng minh QCKc lên 6 cấp. Trong 30 giây đầu, tăng tốc độ tích nộ đồng minh QCKc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% miễn nhiễm khóa skill. Giảm 30% sát thương đến từ kẻ địch STRc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'qck_rr_pf_shiryu.png'
		},
		'tags': 'skill_deal_dmg, skill_fixed_dmg, hs_atk_up, hs_hp_up, hs_ct_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'206' : {
		'title' : "Shiryu, Blackbeard Pirates 2nd Titanic Captain",
		'color' : 'int',
		'class' : 'driven, slasher',
		'stars' : 'Treasure Map',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây (ATK x 1.7) sát thương lên một vùng kẻ địch theo đường thẳng. Giảm ATK toàn bộ địch đi 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng minh INTc lên 5 cấp. Tăng CRIT đồng minh INTc lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '80% miễn nhiễm sát thương theo thời gian.',
		},
		'pattern': 'Normal Attack → Level 2 Medium Range Heal → Normal Attack → Level 2 Small Range Heal',
		'img' : {
			'src' : 'int_tm_shiryu.png'
		},
		'tags': 'skill_deal_dmg, skill_fixed_dmg, hs_atk_up, hs_hp_up, hs_ct_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'207' : {
		'title' : "Fire Tank Pirates, Family Protection Gang - Capone Gang Bege.",
		'color' : 'dual',
		'class' : 'driven, shooter',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây 1500 sát thương chuẩn cho kẻ địch trong một vùng rộng. Tăng tỉ lệ đánh lui của đồng minh lên 5 cấp trong 20 giây. Khi HP nhỏ hơn hoặc bằng 50%, hồi HP tương đương (RCV x 2.5) trong một phạm vi nhỏ.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh SHOOTER/DRIVEN lên 5 cấp. Tăng DEF đồng minh SHOOTER/DRIVEN lên 3 cấp. Tăng DEF bản thân lên 5 cấp. Tăng ATK đồng minh SHOOTER/DRIVEN lên 3 cấp. Tăng tỉ lệ đánh lui của toàn bộ đồng minh lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có DEF cao.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Hồi 250HP mỗi lượt.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (small range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'legend_fire_tank_pirates.png'
		},
		'tags': 'skill_fixed_dmg, skill_blow_up, skill_heal, hs_def_up, hs_hp_up, hs_blow_up, hs_atk_up, target_highest_def, ability_dmg_reduce, ability_prevent_bind'
	},

	'208' : {
		'title' : "Charlotte Katakuri, Overwhelmingly Powerful Mochi",
		'color' : 'psy',
		'class' : 'powerhouse, shooter',
		'stars' : 'Kizuna',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương cho 3 kẻ địch. Giảm SPEED kẻ địch INTc đi 5 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Tăng tỉ lệ đánh trượt của kẻ địch lên 5 cấp. Giảm tốc độ tích nộ của kẻ địch INTc đi 4 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có ATK cao.',
			'extra_ability' : '60% thoát trạng thái khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.4 heal himself → Strong Attack → Strong Attack',
		'img' : {
			'src' : 'kizuna_psy_katakuri.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_down, hs_miss_up, hs_ct_down, target_highest_atk, ability_prevent_bind'
	},

	'209' : {
		'title' : "Jewelry Bonney, Freely Control Ones Age",
		'color' : 'int',
		'class' : 'fighter, freespirit',
		'stars' : 'Legend',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Giảm ATK kẻ địch trong một vùng rộng đi 5 cấp trong 15 giây. Tăng ATK đồng minh INTc lên 5 cấp trong 15 giây. Giảm thanh nộ đi 25% đối với 2 kẻ địch đang có thanh nộ lớn hơn hoặc bằng 80%.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh INTc lên 5 cấp. Giảm DEF toàn bộ địch đi 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm 30% sát thương tới từ kẻ địch PSYc.',
		},
		'pattern': 'Normal Attack → Lv.2 heal herself → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'legend_int_bonney.png'
		},
		'tags': 'skill_atk_down, skill_atk_up, skill_ct_reduce, hs_atk_up, hs_def_down, target_nearby, ability_prevent_bind, ability_dmg_reduce'
	},

	'210' : {
		'title' : "Scratchmen Apoo, Alliance Talking About The Worst Generations",
		'color' : 'dex',
		'class' : 'shooter, freespirit',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 23 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương một vùng lớn kẻ địch. Và giảm SPEED những kẻ địch trong vùng đó đi 3 cấp.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK lên 5 cấp cho đồng minh DEXc/PSYc/INTc. Tăng HP lên 3 cấp cho đồng minh DEXc/PSYc/INTc.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'rr_dex_apoo_bonney_batch.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_down, hs_atk_up, hs_hp_up, target_nearby, ability_prevent_silence'
	},

	'211' : {
		'title' : "Basil Hawkins, Alliance Talking About The Worst Generations",
		'color' : 'int',
		'class' : 'cerebral, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Bật trạng thái khiêu khích trong 20 giây. Tăng tỉ lệ chặn đòn của đồng minh INTc lên 5 cấp trong 20 giây. Cắt 10% HP kẻ địch trong một vùng nhỏ.',
		},
		'hidden_skill' : {
			'des' : 'Tăng chặn đòn đồng minh INTc lên 5 cấp. Tăng DEF bản thân lên 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : 'rr_int_hawkins_bonney_batch.png'
		},
		'tags': 'skill_cut_hp, skill_lock_target, skill_guard_up, hs_guard_up, hs_def_up, target_nearby, ability_prevent_silence'
	},

	'212' : {
		'title' : "X Drake, Remembering the Past of Red Flags",
		'color' : 'int',
		'class' : 'powerhouse, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Hỗ trợ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương cho một vùng kẻ địch phía trước. Tăng CRIT đồng minh INTc lên 3 cấp trong 15 giây. Tăng SPEED đồng minh INTc lên 3 cấp trong 15 giây.',
		},
		'hidden_skill' : {
			'des' : 'Giảm tỉ lệ chặn đồng toàn bộ địch đi 5 cấp. Đồng minh INTc tăng ATK lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'rr_int_xdrake_bonney_batch.png'
		},
		'tags': 'skill_deal_dmg, skill_crit_up, skill_speed_up, hs_guard_down,hs_atk_up, target_nearby, ability_prevent_bind'
	},

	'213' : {
		'title' : "Cavendish, The Grand White Knight Swordsman",
		'color' : 'qck',
		'class' : 'driven, slasher',
		'stars' : 'Event',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 19 Giây',
			'des' : 'Gây (ATK x 1) sát thương cho một vùng lớn kẻ địch. Tăng ATK bản thân lên 5 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Đồng minh STRc/DEXc/QCKc tăng SPEED lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'event_2021_qck_cavendish.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_speed_up, target_nearby, ability_prevent_silence'
	},

	'214' : {
		'title' : "Bartolomeo, A Ferocious Bull That Yearns for More",
		'color' : 'str',
		'class' : 'driven, striker',
		'stars' : 'Event',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 19 Giây',
			'des' : 'Gây (ATK x 1) sát thương cho một vùng lớn kẻ địch. Tăng DEF bản thân lên 2 cấp trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Đồng minh STRc/DEXc/QCKc tăng HP lên 5 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có HP thấp.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Strong Attack → Full Power Attack',
		'img' : {
			'src' : 'event_2021_str_bartolomeo.png'
		},
		'tags': 'skill_deal_dmg, skill_def_up, hs_hp_up, target_low_hp, ability_prevent_silence'
	},

	'215' : {
		'title' : "Smoker, Strike on the Shichibukai",
		'color' : 'int',
		'class' : 'driven, striker',
		'stars' : 'Pirate Festival',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây (ATK x 2) sát thương cho một vùng lớn kẻ địch. 100% khóa skill 2 kẻ địch trong 20 giây.',
		},
		'hidden_skill' : {
			'des' : 'Đồng minh INTc tăng ATK lên 7 cấp. Toàn bộ kẻ địch giảm chính xác đòn đánh đi 10 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch có SPEED cao.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm 30% sát thương từ kẻ địch PSYc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '215.png'
		},
		'tags': 'skill_deal_dmg, skill_silence_enemies, hs_atk_up, hs_miss_up, target_highest_speed, ability_prevent_bind, ability_dmg_reduce'
	},

	'216' : {
		'title' : "Urouge, Rookie's Series of Battles",
		'color' : 'dex',
		'class' : 'fighter, powerhouse',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Tăng ATK bản thân lên 7 cấp trong 20 giây. Gây (ATK x 1.8) sát thương một vùng nhỏ kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK bản thân lên 5 cấp. Trong 40 giây đầu, tăng DEF đồng minh DEXc lên 3 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa hành động.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '216.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_atk_up, hs_def_up, target_nearby, ability_prevent_bind'
	},

	'217' : {
		'title' : "Gear 4, Monkey D. Luffy, Competing Captains",
		'color' : 'qck',
		'class' : 'fighter, freespirit',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Tăng ATK bản thân lên 7 cấp trong 5 giây. Gây (ATK x 2) sát thương một vùng lớn. 70% cơ hội bứt tốc tức thời cho 2 đồng minh QCKc.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh QCKc lên 5 cấp. Tăng HP bản thân lên 5 cấp. Khi một đồng minh bị hạ gục, tăng ATK bản thân lên 5 cấp. Khi trận đấu còn 70 giây, tăng SPEED đông minh QCKc lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa skill. Giảm 30% sát thương đến từ kẻ địch STRc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '217.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, skill_haste, hs_hp_up, hs_atk_up, hs_speed_up, target_nearby, ability_dmg_reduce, ability_prevent_silence'
	},

	'218' : {
		'title' : "Trafalgar Law, Competing Captains - 7th Anniversary",
		'color' : 'dex',
		'class' : 'slasher, cerebral',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 25 Giây',
			'des' : 'Đặt bản thân và 2 đồng minh DEXc vào trạng thái "Phản đòn", sát thương phản đòn bằng (ATK x 1.5) trong 30 giây. Gây (ATK x 1.5) sát thương một vùng kẻ địch.',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh DEXc lên 5 cấp. Khi trận đấu còn 70 giây, tăng DEF đồng mình DEXc lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm tê liệt. Giảm 30% sát thương đến từ kẻ địch QCKc.',
		},
		'pattern': 'Normal Attack → Strong Attack → Lv.1 heal allies (small range) → Normal Attack',
		'img' : {
			'src' : '218.png'
		},
		'tags': 'skill_deal_dmg, skill_counter, hs_hp_up, hs_def_up, target_nearby, ability_prevent_para, ability_dmg_reduce'
	},

	'219' : {
		'title' : "Eustass Captain Kid, Competing Captains - 7th Anniversary",
		'color' : 'str',
		'class' : 'striker, driven',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 32 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương cho một vùng kẻ địch phía trước, đòn đánh này bỏ qua chỉ số DEF của kẻ địch. Tăng DEF đồng minh STRc lên 3 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh STRc lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm 30% sát thương đến từ kẻ địch DEXc.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '219.png'
		},
		'tags': 'skill_deal_dmg, skill_immu_def, skill_def_up, hs_atk_up, target_nearby, ability_prevent_bind, ability_dmg_reduce'
	},

	'220' : {
		'title' : "Killer, Pirate in the Storm",
		'color' : 'qck',
		'class' : 'striker, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 17 Giây',
			'des' : 'Gây (ATK x 1.3) sát thương cho 2 kẻ địch. 70% làm tê liệt 2 kẻ địch trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng minh STRc/DEXc/QCKc lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa hành động.',
		},
		'pattern': 'Normal Attack → Lv.2 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : '220.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, hs_speed_up, target_nearby, ability_prevent_bind'
	},

	'221' : {
		'title' : "Roronoa Zoro, Pirate in the Storm",
		'color' : 'qck',
		'class' : 'driven, slasher',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây (ATK x 1.5) sát thương cho những kẻ địch trước mặt theo đường thẳng. Tăng ATK đồng minh lên 5 cấp',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP toàn bộ đồng minh lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '221.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_hp_up, target_nearby, ability_prevent_silence'
	},

	'222' : {
		'title' : "Jinbe, Straw Hat Pirates Helmsman",
		'color' : 'str',
		'class' : 'fighter, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 24 Giây',
			'des' : 'Gây ATK đồng minh STRc/DEXc/QCKc lên 5 cấp trong 10 giây. Gây (ATK x 1.8) sát thương một vùng kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh STRc/DEXc/QCKc lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát khỏi trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '222.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'223' : {
		'title' : "Kaido & Big Mom, The Worst-Ever Alliance",
		'color' : 'str',
		'class' : 'driven, powerhouse',
		'stars' : 'Event',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 30 Giây',
			'des' : 'Gây (ATK x 2.5) sát thương cho 2 kẻ địch. Tăng ATK đồng minh DRIVEN/POWERHOUSE lên 5 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh DRIVEN/POWERHOUSE lên 7 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '70% thoát khỏi trạng thái khóa skill.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '223.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'224' : {
		'title' : "Koala, The 7th Anniversary Cruise",
		'color' : 'dex',
		'class' : 'fighter, freespirit',
		'stars' : 'Treasure Map',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 2.5) sát thương một vùng nhỏ kẻ địch. Tăng CRIT đồng minh DEXc lên 5 cấp trong 20 giây. Hồi (RCV x 5) HP cho bản thân',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh DEXc lên 5 cấp. Tăng DEF đồng minh DEXc lên 2 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '80% thoát khỏi trạng thái tê liệt.',
		},
		'pattern': 'Normal Attack → Lv.1 heal allies (medium range) → Normal Attack → Lv.2 heal allies (small range)',
		'img' : {
			'src' : '224.png'
		},
		'tags': 'skill_deal_dmg, skill_crit_up, skill_heal, hs_atk_up, hs_def_up, target_nearby, ability_prevent_para'
	},

	'225' : {
		'title' : "Sanji & Pudding, Special Cake Complete!",
		'color' : 'dual',
		'class' : 'fighter, cerebral',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 35 Giây',
			'des' : 'Giảm SPEED toàn bộ địch đi 9 cấp trong 20 giây. Gây (ATK x 2.5) sát thương cho 3 kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'Trong 40 giây đầu, giảm ATK toàn bộ địch đi 6 cấp. Giảm tốc độ tích nộ toàn bộ địch đi 2 cấp. Giảm DEF toàn bộ địch đi 2 cấp.'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa kĩ năng.',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '225.png'
		},
		'tags': 'skill_deal_dmg, skill_speed_down, hs_atk_down, hs_ct_down, hs_def_down, target_nearby, ability_prevent_silence'
	},

	'226' : {
		'title' : "Kuja Pirates, Robust Woman Pirates",
		'color' : 'qck',
		'class' : 'shooter, freespirit',
		'stars' : 'Kizuna',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 27 Giây',
			'des' : 'Gây (ATK x 1.8) sát thương cho 3 kẻ địch. Giảm ATK một vùng lớn kẻ địch đi 3 cấp trong 10 giây. Giảm DEF một vùng lớn kẻ địch đi 3 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh QCKc lên 6 cấp. Giảm DEF toàn bộ địch đi 3 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động.',
		},
		'pattern': 'Normal Attack → Strong Attack → Level 1 Small Range Heal → Normal Attack',
		'img' : {
			'src' : '226.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_down, skill_def_down, hs_atk_up, hs_def_down, target_nearby, ability_prevent_bind'
	},

	'227' : {
		'title' : "Ace & Sabo, Raging Flame-Dragon",
		'color' : 'dual',
		'class' : 'shooter, freespirit',
		'stars' : 'Legend',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 28 Giây',
			'des' : 'Gây (ATK x 2.5) sát thương một vùng rộng. 50% cơ hội làm tê liệt 3 kẻ địch trong 10 giây. Tăng ATK toàn bộ đồng minh lên 5 cấp trong 15 giây. Tăng DEF toàn bộ đồng minh lên 3 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED toàn bộ đồng minh lên 6 cấp. Tăng DEF toàn bộ đồng minh lên 3 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Miễn nhiễm khóa kĩ năng',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '227.png'
		},
		'tags': 'skill_deal_dmg, skill_para_enemies, skill_atk_up, skill_def_up, hs_speed_up, hs_def_up, target_nearby, ability_prevent_bind, ability_prevent_silence'
	},

	'228' : {
		'title' : "Whitebeard VS Shanks, Failed Negotiations - Whitebeard",
		'color' : 'int',
		'class' : 'striker, powerhouse',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 18 Giây',
			'des' : 'Cắt 10% HP một vùng lớn kẻ địch. Tăng DEF đồng minh INTc lên 2 cấp trong 13 giây. Tăng ATK đồng minh INTc lên 3 cấp trong 13 giây. Khi trận đấu còn dưới hoặc bằng 50 giây, gây (ATk x 1) sát thương cho toàn bộ kẻ địch',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh INTc lên 5 cấp. Tăng ATK đồng minh INTc lên 5 cấp. Nếu HP dưới 30%, tăng DEF bản thân lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa kĩ năng. Giảm 30% sát thương đến từ kẻ địch PSYc',
		},
		'pattern': 'Normal Attack → Level 2 Medium Range Heal → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '228.png'
		},
		'tags': 'skill_cut_hp, skill_def_up, skill_atk_up, hs_hp_up, hs_atk_up, hs_def_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'229' : {
		'title' : "Whitebeard VS Shanks, Failed Negotiations - Shanks",
		'color' : 'psy',
		'class' : 'slasher, cerebral',
		'stars' : 'Legend',
		'type' : 'Phòng thủ',
		'skill' : {
			'note' : 'lv10 - 29 Giây',
			'des' : 'Tăng DEF đồng minh PSYc lên 3 cấp trong 19 giây. Gây 1000 sát thương chuẩn cho toàn bộ địch. Khi trận đấu bằng hoặc dưới 50 giây, gây thêm 2000 sát thương chuẩn cho toàn bộ địch',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh PSYc lên 5 cấp. Tăng ATK đồng minh PSYc lên 5 cấp. Khi HP còn dưới 30%, tăng DEF bản thân lên 7 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa kĩ năng. Giảm 30% sát thương đến từ kẻ địch INTc',
		},
		'pattern': 'Normal Attack → Level 2 Medium Range Heal → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '228.png'
		},
		'tags': 'skill_def_up, skill_fixed_dmg, hs_hp_up, hs_atk_up, hs_def_up, target_nearby, ability_prevent_silence, ability_dmg_reduce'
	},

	'230' : {
		'title' : "Marco, Sky-Soaring Phoenix",
		'color' : 'int',
		'class' : 'powerhouse, cerebral',
		'stars' : 'Legend',
		'type' : 'Hồi phục',
		'skill' : {
			'note' : 'lv10 - 31 Giây',
			'des' : 'Gây (ATK x 2) sát thương một vùng lớn kẻ địch. Khi HP dưới 50%, hồi phục (RCV x 2.5) HP cho đồng minh trong một vùng rộng. Giảm DEF toàn bộ địch trong một vùng lớn đi 5 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng minh INTc lên 5 cấp. Tăng tỉ lệ đánh lui kẻ địch lên 5 cấp cho đồng minh INTc. Trong 30 giây đầu, tăng tốc độ tích nộ của đồng minh INTc lên 3 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm 30% sát thương đến từ kẻ địch PSYc',
		},
		'pattern': 'Normal Attack → Level 2 Medium Range Heal → Strong Attack → Full Power Attack',
		'img' : {
			'src' : '230.png'
		},
		'tags': 'skill_deal_dmg, skill_heal, skill_def_down, hs_speed_up, hs_blow_up, hs_ct_up, target_nearby, ability_prevent_bind, ability_dmg_reduce'
	},

	'231' : {
		'title' : "Ben Beckman, First Mate Taking a Short Breakx",
		'color' : 'psy',
		'class' : 'striker, cerebral',
		'stars' : 'Rare Recruit',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 21 Giây',
			'des' : 'Gây 2000 sát thương chuẩn cho 1 kẻ địch. Giảm ATK một vùng kẻ địch đi 5 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng HP đồng minh PSYc lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát trạng thái khóa kĩ năng',
		},
		'pattern': 'Normal Attack → Level 2 Self Heal → Strong Attack → Strong Attack',
		'img' : {
			'src' : '231.png'
		},
		'tags': 'skill_fixed_dmg, skill_atk_down, hs_hp_up, target_nearby, ability_prevent_silence'
	},

	'232' : {
		'title' : "Vista, Embarking Flower Swords",
		'color' : 'int',
		'class' : 'slasher, powerhouse',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Gây 1500 sát thương chuẩn cho một vùng kẻ địch theo đường thẳng. Tăng SPEED đồng mình INTc lên 5 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng SPEED đồng minh INTc lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát trạng thái khóa hành động',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : '232.png'
		},
		'tags': 'skill_fixed_dmg, skill_speed_up, hs_speed_up, target_nearby, ability_prevent_bind'
	},

	'233' : {
		'title' : "Rockstar, Red Hair Pirates (Rookie)",
		'color' : 'psy',
		'class' : 'fighter, powerhouse',
		'stars' : 'Rare Recruit',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 22 Giây',
			'des' : 'Gây (ATK x 1.3) sát thương cho một vùng kẻ địch theo đường thẳng. Tăng ATK đồng mình PSYc lên 5 cấp trong 20 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh PSYc lên 6 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : '60% thoát trạng thái khóa kĩ năng',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : '233.png'
		},
		'tags': 'skill_deal_dmg, skill_atk_up, hs_atk_up, target_nearby, ability_prevent_silence'
	},

	'234' : {
		'title' : "Blackbeard, Settlement on Banaro Island",
		'color' : 'int',
		'class' : 'driven, powerhouse',
		'stars' : 'Event - Barano Island',
		'type' : 'Phá hoại',
		'skill' : {
			'note' : 'lv10 - 26 Giây',
			'des' : 'Cắt 20% HP một vùng lớn kẻ địch. Giảm DEF một cùng lớn kẻ địch đi 3 cấp trong 10 giây',
		},
		'hidden_skill' : {
			'des' : 'Giảm DEF bản thân đi 3 cấp. Tăng ATK bản thân lên 7 cấp. Tăng HP cho đồng minh INTc lên 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch thấp máu.',
			'extra_ability' : '60% thoát trạng thái khóa hành động',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : '234.png'
		},
		'tags': 'skill_cut_hp, skill_def_down, hs_def_down, hs_atk_up, hs_hp_up, target_low_hp, ability_prevent_bind'
	},

	'235' : {
		'title' : "Cracker - PVP RR",
		'color' : 'str',
		'class' : 'slasher, powerhouse',
		'stars' : 'Pirate Festival',
		'type' : 'Tấn công',
		'skill' : {
			'note' : 'lv10 - 18 Giây',
			'des' : 'Gây (ATK x 1) sát thương cho 1 kẻ địch, đòn đánh này sẽ bỏ qua DEF của kẻ địch. Tăng ATK bản thân lên 5 cấp. Tăng tốc độ tích nộ đồng minh STRc lên 3 cấp trong 15 giây',
		},
		'hidden_skill' : {
			'des' : 'Tăng ATK đồng minh STRc lên 5 cấp. Tăng SPEED đồng minh STRc lên 5 cấp. Trong 40 giây đầu, giảm ATK kẻ địch DEXc đi 5 cấp'
		},
		'others' : {
			'target' : 'Kẻ địch ở gần.',
			'extra_ability' : 'Miễn nhiễm khóa hành động. Giảm 30% sát thương đến từ kẻ địch DEXc',
		},
		'pattern': 'Normal Attack → Normal Attack → Strong Attack → Fullpower Attack',
		'img' : {
			'src' : '235.png'
		},
		'tags': 'skill_deal_dmg, skill_immu_def, skill_ct_up, hs_atk_up, hs_speed_up, hs_atk_down, target_nearby, ability_prevent_bind, ability_dmg_reduce'
	},
}